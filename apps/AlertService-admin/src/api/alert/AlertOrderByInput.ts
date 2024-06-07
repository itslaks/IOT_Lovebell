import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  networkEventId?: SortOrder;
  severity?: SortOrder;
  updatedAt?: SortOrder;
};
