import { AlertUpdateManyWithoutNetworkEventsInput } from "./AlertUpdateManyWithoutNetworkEventsInput";
import { InputJsonValue } from "../../types";

export type NetworkEventUpdateInput = {
  alerts?: AlertUpdateManyWithoutNetworkEventsInput;
  destinationIp?: string | null;
  destinationPort?: number | null;
  payload?: InputJsonValue;
  protocol?: string | null;
  sourceIp?: string | null;
  sourcePort?: number | null;
  timestamp?: Date | null;
};
