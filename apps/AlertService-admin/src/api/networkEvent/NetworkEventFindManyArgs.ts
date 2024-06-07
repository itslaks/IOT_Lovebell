import { NetworkEventWhereInput } from "./NetworkEventWhereInput";
import { NetworkEventOrderByInput } from "./NetworkEventOrderByInput";

export type NetworkEventFindManyArgs = {
  where?: NetworkEventWhereInput;
  orderBy?: Array<NetworkEventOrderByInput>;
  skip?: number;
  take?: number;
};
