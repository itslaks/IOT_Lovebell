import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NetworkEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"NetworkEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
