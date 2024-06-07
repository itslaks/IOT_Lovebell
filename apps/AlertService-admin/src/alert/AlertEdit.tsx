import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NetworkEventTitle } from "../networkEvent/NetworkEventTitle";

export const AlertEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="networkEvent.id"
          reference="NetworkEvent"
          label="networkEvent"
        >
          <SelectInput optionText={NetworkEventTitle} />
        </ReferenceInput>
        <SelectInput
          source="severity"
          label="severity"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
