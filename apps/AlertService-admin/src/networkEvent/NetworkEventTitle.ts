import { NetworkEvent as TNetworkEvent } from "../api/networkEvent/NetworkEvent";

export const NETWORKEVENT_TITLE_FIELD = "destinationIp";

export const NetworkEventTitle = (record: TNetworkEvent): string => {
  return record.destinationIp?.toString() || String(record.id);
};
