import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AlertTitle } from "../alert/AlertTitle";

export const NetworkEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
