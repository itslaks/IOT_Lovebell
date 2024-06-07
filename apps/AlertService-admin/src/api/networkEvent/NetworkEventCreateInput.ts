import { AlertCreateNestedManyWithoutNetworkEventsInput } from "./AlertCreateNestedManyWithoutNetworkEventsInput";
import { InputJsonValue } from "../../types";

export type NetworkEventCreateInput = {
  alerts?: AlertCreateNestedManyWithoutNetworkEventsInput;
  destinationIp?: string | null;
  destinationPort?: number | null;
  payload?: InputJsonValue;
  protocol?: string | null;
  sourceIp?: string | null;
  sourcePort?: number | null;
  timestamp?: Date | null;
};
