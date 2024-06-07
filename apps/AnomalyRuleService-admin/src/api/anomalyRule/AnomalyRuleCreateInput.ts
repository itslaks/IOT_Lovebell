import { InputJsonValue } from "../../types";

export type AnomalyRuleCreateInput = {
  condition?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
