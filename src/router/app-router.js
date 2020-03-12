import React from "react";
import { withRouter } from "react-router";
import { Route } from "react-router";
import AppLayoutView from "../components/layout/app-layout";
const AppLayout = withRouter(AppLayoutView);

const AppLayoutRouter = ({ component: Component, ...rest }) => {
    console.log(Component);
    return (
        <Route
            {...rest}
            render={matchProps => (
                <AppLayout history={matchProps.history}>
                    <Component {...matchProps} />
                </AppLayout>
            )}
        />)
}

export default AppLayoutRouter;