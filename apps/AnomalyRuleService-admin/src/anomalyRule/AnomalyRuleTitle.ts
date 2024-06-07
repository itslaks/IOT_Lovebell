import { AnomalyRule as TAnomalyRule } from "../api/anomalyRule/AnomalyRule";

export const ANOMALYRULE_TITLE_FIELD = "name";

export const AnomalyRuleTitle = (record: TAnomalyRule): string => {
  return record.name?.toString() || String(record.id);
};
