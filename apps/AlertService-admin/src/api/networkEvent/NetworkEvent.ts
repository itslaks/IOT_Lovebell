import { Alert } from "../alert/Alert";
import { JsonValue } from "type-fest";

export type NetworkEvent = {
  alerts?: Array<Alert>;
  createdAt: Date;
  destinationIp: string | null;
  destinationPort: number | null;
  id: string;
  payload: JsonValue;
  protocol: string | null;
  sourceIp: string | null;
  sourcePort: number | null;
  timestamp: Date | null;
  updatedAt: Date;
};
