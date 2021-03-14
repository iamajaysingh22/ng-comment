import { Switch, Route } from "react-router-dom";
import App from "../App";
import Table from "../components/Table";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Table}></Route>
      <Route path="/comments" component={Table}></Route>
    </Switch>
  );
}

export default Routes;
