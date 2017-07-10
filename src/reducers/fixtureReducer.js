import * as types from '../actions/actionsTypes';
import initialState from './initialState';


export default function fixtureReducer(state=initialState.allFixtures,action){
    switch(action.type){
        case types.LOAD_NEXT_FIXTURES_SUCCESS:
            return Object.assign({},state,{nextFixtures :action.fixtures});
        case types.LOAD_COMPETETION_FIXTURES_SUCCESS:
            return Object.assign({},state,{competetionFixtures :action.competetionFixtures});
        default:
            return state;
    }
}