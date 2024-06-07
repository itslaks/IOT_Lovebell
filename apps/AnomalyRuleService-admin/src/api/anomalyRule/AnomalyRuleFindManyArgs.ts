import { AnomalyRuleWhereInput } from "./AnomalyRuleWhereInput";
import { AnomalyRuleOrderByInput } from "./AnomalyRuleOrderByInput";

export type AnomalyRuleFindManyArgs = {
  where?: AnomalyRuleWhereInput;
  orderBy?: Array<AnomalyRuleOrderByInput>;
  skip?: number;
  take?: number;
};
