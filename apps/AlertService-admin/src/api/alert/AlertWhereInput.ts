import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NetworkEventWhereUniqueInput } from "../networkEvent/NetworkEventWhereUniqueInput";

export type AlertWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  networkEvent?: NetworkEventWhereUniqueInput;
  severity?: "Option1";
};
