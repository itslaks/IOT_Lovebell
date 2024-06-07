import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type AnomalyRuleWhereInput = {
  condition?: JsonFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringNullableFilter;
};
