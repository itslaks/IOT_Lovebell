import { Module } from "@nestjs/common";
import { NetworkEventModuleBase } from "./base/networkEvent.module.base";
import { NetworkEventService } from "./networkEvent.service";
import { NetworkEventController } from "./networkEvent.controller";
import { NetworkEventResolver } from "./networkEvent.resolver";

@Module({
  imports: [NetworkEventModuleBase],
  controllers: [NetworkEventController],
  providers: [NetworkEventService, NetworkEventResolver],
  exports: [NetworkEventService],
})
export class NetworkEventModule {}
