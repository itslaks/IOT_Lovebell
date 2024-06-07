import { SortOrder } from "../../util/SortOrder";

export type NetworkEventOrderByInput = {
  createdAt?: SortOrder;
  destinationIp?: SortOrder;
  destinationPort?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  protocol?: SortOrder;
  sourceIp?: SortOrder;
  sourcePort?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
