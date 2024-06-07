import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NetworkEventService } from "./networkEvent.service";
import { NetworkEventControllerBase } from "./base/networkEvent.controller.base";

@swagger.ApiTags("networkEvents")
@common.Controller("networkEvents")
export class NetworkEventController extends NetworkEventControllerBase {
  constructor(protected readonly service: NetworkEventService) {
    super(service);
  }
}
