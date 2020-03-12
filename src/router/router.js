import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import App from "../components/App";
import AppLayoutRouter from "./app-router";
import OverView from "../components/overview";
import Sales from "../components/sales";

export const AppRouter = () => {
    return (
        <Router>
            <App>
                <Switch>
                    <Redirect exact from='/' to='/sales' />
                    <AppLayoutRouter  path="/overview" component={OverView} />
                    <AppLayoutRouter  path="/sales" component={Sales} />
                </Switch>
            </App>
        </Router>
    )
}