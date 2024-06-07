import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AlertService } from "./alert.service";
import { AlertControllerBase } from "./base/alert.controller.base";

@swagger.ApiTags("alerts")
@common.Controller("alerts")
export class AlertController extends AlertControllerBase {
  constructor(protected readonly service: AlertService) {
    super(service);
  }
}
