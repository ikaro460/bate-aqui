import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import SideBar from "../components/SideBar";
import Turma from "../pages/Turma";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/home/:id">
        <SideBar />
        <Header />
        <Home />
      </Route>

      <Route exact path="/turma/:id">
        <SideBar />
        <Header />
        <Turma />
      </Route>

      <Route exact path="/login">
        {/* <SideBar />
        <Header /> */}
        <Login />
      </Route>

      <Route path="/signup">
        {/* <SideBar />
        <Header /> */}
        <Singup />
      </Route>

      <Route exact path="/">
        {/* <SideBar />
        <Header /> */}
        <LandingPage />
      </Route>
    </Switch>
  );
}
