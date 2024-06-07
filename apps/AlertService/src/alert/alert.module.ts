import { Module } from "@nestjs/common";
import { AlertModuleBase } from "./base/alert.module.base";
import { AlertService } from "./alert.service";
import { AlertController } from "./alert.controller";
import { AlertResolver } from "./alert.resolver";

@Module({
  imports: [AlertModuleBase],
  controllers: [AlertController],
  providers: [AlertService, AlertResolver],
  exports: [AlertService],
})
export class AlertModule {}
