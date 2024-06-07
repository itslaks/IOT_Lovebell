import { JsonValue } from "type-fest";

export type AnomalyRule = {
  condition: JsonValue;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string | null;
  updatedAt: Date;
};
