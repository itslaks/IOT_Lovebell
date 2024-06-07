import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlertServiceBase } from "./base/alert.service.base";

@Injectable()
export class AlertService extends AlertServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
