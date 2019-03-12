import React from "react";
import Intro from "./Intro";
import Resume from "./Resume";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch basename={process.env.PUBLIC_URL}>
            <Route
              exact
              path={`${process.env.BASE_PATH || ""}/`}
              component={Intro}
            />
            <Route
              path={`${process.env.BASE_PATH || ""}/resume`}
              component={Resume}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
