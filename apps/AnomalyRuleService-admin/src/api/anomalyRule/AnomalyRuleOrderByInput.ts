import { SortOrder } from "../../util/SortOrder";

export type AnomalyRuleOrderByInput = {
  condition?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
