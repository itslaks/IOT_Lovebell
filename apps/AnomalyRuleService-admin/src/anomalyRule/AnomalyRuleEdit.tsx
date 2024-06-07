import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AnomalyRuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
