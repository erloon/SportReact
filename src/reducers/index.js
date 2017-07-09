import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import allCompetetions from './competetionReducer';


const rootReducer = combineReducers({
    allCompetetions,
    ajaxCallsInProgress
});

export default rootReducer;