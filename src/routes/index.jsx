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

            <Route exact path="/turma/:groupsId">
                <SideBar />
                <Header />
                <Turma />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route path="/signup">
                <Singup />
            </Route>

            <Route exact path="/">
                <LandingPage />
            </Route>
        </Switch>
    );
}
