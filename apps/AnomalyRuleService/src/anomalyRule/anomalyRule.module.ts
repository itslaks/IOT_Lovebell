import { Module } from "@nestjs/common";
import { AnomalyRuleModuleBase } from "./base/anomalyRule.module.base";
import { AnomalyRuleService } from "./anomalyRule.service";
import { AnomalyRuleController } from "./anomalyRule.controller";
import { AnomalyRuleResolver } from "./anomalyRule.resolver";

@Module({
  imports: [AnomalyRuleModuleBase],
  controllers: [AnomalyRuleController],
  providers: [AnomalyRuleService, AnomalyRuleResolver],
  exports: [AnomalyRuleService],
})
export class AnomalyRuleModule {}
