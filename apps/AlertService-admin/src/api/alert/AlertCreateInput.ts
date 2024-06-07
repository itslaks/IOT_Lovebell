import { NetworkEventWhereUniqueInput } from "../networkEvent/NetworkEventWhereUniqueInput";

export type AlertCreateInput = {
  description?: string | null;
  networkEvent?: NetworkEventWhereUniqueInput | null;
  severity?: "Option1" | null;
};
