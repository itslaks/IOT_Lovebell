import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnomalyRuleServiceBase } from "./base/anomalyRule.service.base";

@Injectable()
export class AnomalyRuleService extends AnomalyRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
