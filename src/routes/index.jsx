import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";


export default function Routes() {

  return(
    <Switch>

      <Route exact path="/home" >
        <Header />
        <Home />
      </Route>

    </Switch>
  )

}