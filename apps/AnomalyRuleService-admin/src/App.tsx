import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnomalyRuleList } from "./anomalyRule/AnomalyRuleList";
import { AnomalyRuleCreate } from "./anomalyRule/AnomalyRuleCreate";
import { AnomalyRuleEdit } from "./anomalyRule/AnomalyRuleEdit";
import { AnomalyRuleShow } from "./anomalyRule/AnomalyRuleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnomalyRuleService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AnomalyRule"
          list={AnomalyRuleList}
          edit={AnomalyRuleEdit}
          create={AnomalyRuleCreate}
          show={AnomalyRuleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
