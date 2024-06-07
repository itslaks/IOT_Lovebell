import * as graphql from "@nestjs/graphql";
import { AlertResolverBase } from "./base/alert.resolver.base";
import { Alert } from "./base/Alert";
import { AlertService } from "./alert.service";

@graphql.Resolver(() => Alert)
export class AlertResolver extends AlertResolverBase {
  constructor(protected readonly service: AlertService) {
    super(service);
  }
}
