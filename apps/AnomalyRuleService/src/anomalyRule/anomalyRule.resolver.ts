import * as graphql from "@nestjs/graphql";
import { AnomalyRuleResolverBase } from "./base/anomalyRule.resolver.base";
import { AnomalyRule } from "./base/AnomalyRule";
import { AnomalyRuleService } from "./anomalyRule.service";

@graphql.Resolver(() => AnomalyRule)
export class AnomalyRuleResolver extends AnomalyRuleResolverBase {
  constructor(protected readonly service: AnomalyRuleService) {
    super(service);
  }
}
