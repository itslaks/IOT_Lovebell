import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { NetworkEventController } from "../networkEvent.controller";
import { NetworkEventService } from "../networkEvent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  destinationIp: "exampleDestinationIp",
  destinationPort: 42,
  id: "exampleId",
  protocol: "exampleProtocol",
  sourceIp: "exampleSourceIp",
  sourcePort: 42,
  timestamp: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  destinationIp: "exampleDestinationIp",
  destinationPort: 42,
  id: "exampleId",
  protocol: "exampleProtocol",
  sourceIp: "exampleSourceIp",
  sourcePort: 42,
  timestamp: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    destinationIp: "exampleDestinationIp",
    destinationPort: 42,
    id: "exampleId",
    protocol: "exampleProtocol",
    sourceIp: "exampleSourceIp",
    sourcePort: 42,
    timestamp: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  destinationIp: "exampleDestinationIp",
  destinationPort: 42,
  id: "exampleId",
  protocol: "exampleProtocol",
  sourceIp: "exampleSourceIp",
  sourcePort: 42,
  timestamp: new Date(),
  updatedAt: new Date(),
};

const service = {
  createNetworkEvent() {
    return CREATE_RESULT;
  },
  networkEvents: () => FIND_MANY_RESULT,
  networkEvent: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("NetworkEvent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: NetworkEventService,
          useValue: service,
        },
      ],
      controllers: [NetworkEventController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /networkEvents", async () => {
    await request(app.getHttpServer())
      .post("/networkEvents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /networkEvents", async () => {
    await request(app.getHttpServer())
      .get("/networkEvents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /networkEvents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/networkEvents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /networkEvents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/networkEvents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /networkEvents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/networkEvents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/networkEvents")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
