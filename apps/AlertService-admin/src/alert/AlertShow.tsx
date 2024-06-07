import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { NETWORKEVENT_TITLE_FIELD } from "../networkEvent/NetworkEventTitle";

export const AlertShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
