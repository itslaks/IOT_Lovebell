import { AlertWhereInput } from "./AlertWhereInput";
import { AlertOrderByInput } from "./AlertOrderByInput";

export type AlertFindManyArgs = {
  where?: AlertWhereInput;
  orderBy?: Array<AlertOrderByInput>;
  skip?: number;
  take?: number;
};
