import { NetworkEvent } from "../networkEvent/NetworkEvent";

export type Alert = {
  createdAt: Date;
  description: string | null;
  id: string;
  networkEvent?: NetworkEvent | null;
  severity?: "Option1" | null;
  updatedAt: Date;
};
