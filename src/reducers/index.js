import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import allCompetetions from './competetionReducer';
import allFixtures from './fixtureReducer';

const rootReducer = combineReducers({
    allCompetetions,
    allFixtures,
    ajaxCallsInProgress
});

export default rootReducer;