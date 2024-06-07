import * as graphql from "@nestjs/graphql";
import { NetworkEventResolverBase } from "./base/networkEvent.resolver.base";
import { NetworkEvent } from "./base/NetworkEvent";
import { NetworkEventService } from "./networkEvent.service";

@graphql.Resolver(() => NetworkEvent)
export class NetworkEventResolver extends NetworkEventResolverBase {
  constructor(protected readonly service: NetworkEventService) {
    super(service);
  }
}
