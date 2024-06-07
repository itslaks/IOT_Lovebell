import { NetworkEventWhereUniqueInput } from "../networkEvent/NetworkEventWhereUniqueInput";

export type AlertUpdateInput = {
  description?: string | null;
  networkEvent?: NetworkEventWhereUniqueInput | null;
  severity?: "Option1" | null;
};
