import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function competetionReducer(state=initialState.competetions,action){
    switch(action.type){
        case types.LOAD_CURRENT_COMPETETIONS_SUCCESS:
            return action.competetions;
        default:
            return state;
    }
}