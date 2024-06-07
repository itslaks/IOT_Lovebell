import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnomalyRuleService } from "./anomalyRule.service";
import { AnomalyRuleControllerBase } from "./base/anomalyRule.controller.base";

@swagger.ApiTags("anomalyRules")
@common.Controller("anomalyRules")
export class AnomalyRuleController extends AnomalyRuleControllerBase {
  constructor(protected readonly service: AnomalyRuleService) {
    super(service);
  }
}
