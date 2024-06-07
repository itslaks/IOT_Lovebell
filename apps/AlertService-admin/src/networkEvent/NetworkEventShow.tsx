import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { NETWORKEVENT_TITLE_FIELD } from "./NetworkEventTitle";

export const NetworkEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destinationIP" source="destinationIp" />
        <TextField label="destinationPort" source="destinationPort" />
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <TextField label="protocol" source="protocol" />
        <TextField label="sourceIP" source="sourceIp" />
        <TextField label="sourcePort" source="sourcePort" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Alert"
          target="networkEventId"
          label="Alerts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="networkEvent"
              source="networkevent.id"
              reference="NetworkEvent"
            >
              <TextField source={NETWORKEVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="severity" source="severity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
