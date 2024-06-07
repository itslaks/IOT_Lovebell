import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AlertTitle } from "../alert/AlertTitle";

export const NetworkEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="alerts"
          reference="Alert"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlertTitle} />
        </ReferenceArrayInput>
        <TextInput label="destinationIP" source="destinationIp" />
        <NumberInput
          step={1}
          label="destinationPort"
          source="destinationPort"
        />
        <div />
        <TextInput label="protocol" source="protocol" />
        <TextInput label="sourceIP" source="sourceIp" />
        <NumberInput step={1} label="sourcePort" source="sourcePort" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
