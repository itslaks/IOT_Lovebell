import { AlertListRelationFilter } from "../alert/AlertListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NetworkEventWhereInput = {
  alerts?: AlertListRelationFilter;
  destinationIp?: StringNullableFilter;
  destinationPort?: IntNullableFilter;
  id?: StringFilter;
  payload?: JsonFilter;
  protocol?: StringNullableFilter;
  sourceIp?: StringNullableFilter;
  sourcePort?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
