import React from "react";
import {Route,IndexRoute} from "react-router";
import App from "./components/App";

import HomePage from './components/home/HomePage';
import LastFixture from './components/fixtures/LastFixturePage';
import Competetions from './components/competition/CompetitionPage';
import TablePage from './components/tables/TablePage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/LastFixture" component={LastFixture} />
     <Route path="/Competetions" component={Competetions} />
     <Route path="/table/:id" component={TablePage} />
  </Route>
);
