import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkEventServiceBase } from "./base/networkEvent.service.base";

@Injectable()
export class NetworkEventService extends NetworkEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
