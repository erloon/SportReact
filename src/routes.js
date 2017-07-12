import React from "react";
import {Route,IndexRoute} from "react-router";
import App from "./components/App";

import HomePage from './components/home/HomePage';
import LastFixture from './components/fixtures/LastFixturePage';
import Competetions from './components/competition/CompetitionPage';
import TablePage from './components/tables/TablePage';
import CompetitionFixturePage from './components/fixtures/CompetetionFixturePage';
import TeamsPage from './components/teams/TeamsPage';
import TeamPage from './components/teams/TeamPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/LastFixture" component={LastFixture} />
     <Route path="/Competetions" component={Competetions} />
     <Route path="/table/:id" component={TablePage} />
     <Route path="/fixtures/:id" component={CompetitionFixturePage} />
     <Route path="/teams/:id" component={TeamsPage} />
     <Route path="/team/:id" component={TeamPage} />
  </Route>
);
