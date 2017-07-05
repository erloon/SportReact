import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import competetions from './competetionReducer';


const rootReducer = combineReducers({
    competetions,
    ajaxCallsInProgress
});

export default rootReducer;