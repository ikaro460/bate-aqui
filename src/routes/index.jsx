import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Header />
        <Home />
      </Route>

      <Route exact path="/login">
        <Header />
        <Login />
      </Route>
    </Switch>
  );
}
