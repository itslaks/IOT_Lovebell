import { InputJsonValue } from "../../types";

export type AnomalyRuleUpdateInput = {
  condition?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
