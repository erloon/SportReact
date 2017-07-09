import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function competetionReducer(state=initialState.allCompetetions,action){
    switch(action.type){
        case types.LOAD_CURRENT_COMPETETIONS_SUCCESS:
            return Object.assign({},state,{competetions:action.competetions});
        case types.LOAD_TEAM_SUCCESS:
            return action.team;
        case types.LOAD_TEAM_PALYERS_SUCCESS:
            return action.players;
        case types.LOAD_LEAGUE_TABLE_SUCCESS:
            return Object.assign({},state,{table: action.table})
        case types.LOAD_LEAGUE_TABLE_MATCHDAY_SUCCESS:
            return action.table;
        case types.LOAD_TEAMS_SUCCESS:
            return action.teams;
        default:
            return state;
    }
}