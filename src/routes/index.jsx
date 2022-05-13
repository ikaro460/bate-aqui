import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import SideBar from "../components/SideBar";
import Turma from "../pages/Turma";


export default function Routes() {

  return(
    <Switch>

      <Route exact path="/home" >
        <SideBar />
        <Header />
        <Home />
      </Route>

      <Route exact path="/turma" >
        <SideBar />
        <Header />
        <Turma />
      </Route>

      <Route exact path="/" >
        <Header />
        <LandingPage />
      </Route>

    </Switch>
  )

}