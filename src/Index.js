/*eslint-disable import/default */
import 'babel-polyfill';
import React  from 'react';
import {render} from 'react-dom';
import {browserHistory,Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Routes from './routes';
import '../node_modules/semantic-ui-css/semantic.min.css';
import {loadCurrentCompetetions} from './actions/competetionsActions';
import {loadNextFixtures, loadTomorrowFixtures,loadYesterdayFixtures} from './actions/fixturesActions';

const store = configureStore();
store.dispatch(loadCurrentCompetetions());
store.dispatch(loadNextFixtures());
store.dispatch(loadTomorrowFixtures());
store.dispatch(loadYesterdayFixtures());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('app')
);
