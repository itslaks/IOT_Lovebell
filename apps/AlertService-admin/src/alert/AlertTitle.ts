import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "id";

export const AlertTitle = (record: TAlert): string => {
  return record.id?.toString() || String(record.id);
};
