import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { Result } from "antd";

const fetchRoutes = (containers) => {
  const { Home, Login, Signin, FlightList } = containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/home" component={withRouter(Home)} />
        <Route exact path="/Login" component={withRouter(Login)} />
        <Route exact path="/Signin" component={withRouter(Signin)} />
        <Route exact path="/FlightList" component={withRouter(FlightList)} />
        {/* Router No Match - 404 */}
        <Route path="*">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />
        </Route>
      </Switch>
    );
  };
};

export { fetchRoutes };
