import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import history from '../utils/history'
import suspenser from '../utils/hoc'
const HomePage = React.lazy(() => import('../containers/hompage'));
const SearchPage = React.lazy(() => import('../containers/search'));

function Routes() {
  return (
    <>
      <Router >
        <Switch>
          <Route
            path="/"
            exact
            component={suspenser(HomePage)}
          />
          <Route
            path="/search"
            // exact
            component={suspenser(SearchPage)}
          />
        </Switch>
      </Router>
    </>
  );
}


export default Routes;
