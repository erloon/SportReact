import * as types from './actionsTypes';
import competetionApi from '../api/competetionApi';
import api from '../api/apiMethods';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCurrentCompetetionsSuccess(competetions){
    return {type: types.LOAD_CURRENT_COMPETETIONS_SUCCESS, competetions};
}
export function loadTeamSuccess(team){
    return {type: types.LOAD_TEAM_SUCCESS, team};
}
export function loadPalyersSuccess(palyers){
    return {type: types.LOAD_TEAM_PALYERS_SUCCESS, palyers};
}
export function loadCompetetionsLeagueTableSuccess(table){
    return {type: types.LOAD_LEAGUE_TABLE_SUCCESS, table};
}
export function loadCompetetionsLeagueTableByMatchDaySuccess(table){
    return {type: types.LOAD_LEAGUE_TABLE_MATCHDAY_SUCCESS, table};
}
export function loadCompetetionsTeamsSuccess(teams){
    return {type: types.LOAD_TEAMS_SUCCESS, teams};
}
export function loadTeamFixturesSuccess(fixtures){
    return {type: types.LOAD_TEAM_FIXTURES_SUCCESS, fixtures};
}
export function loadCurrentCompetetions(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return competetionApi.GetCurrent()
            .then(competetions=>{
                dispatch(loadCurrentCompetetionsSuccess(competetions));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadCompetetionsLeagueTable(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return competetionApi.GetCurrent()
            .then(competetions=>{
                dispatch(loadCurrentCompetetionsSuccess(competetions));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadTeam(teamId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetTeam(teamId)
            .then(team=>{
                dispatch(loadTeamSuccess(team));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadPlayers(url){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetPlayers(url)
            .then(palyers=>{
                dispatch(loadPalyersSuccess(palyers));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadLeagueTable(competetionId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return competetionApi.GetLeagueTable(competetionId)
            .then(table=>{
                dispatch(loadCompetetionsLeagueTableSuccess(table));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadLeagueTableInDay(competetionId,matchDay){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return competetionApi.GetLeagueTableInMatchDay(competetionId,matchDay)
            .then(table=>{
                dispatch(loadCompetetionsLeagueTableByMatchDaySuccess(table));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadTeams(competetionId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return competetionApi.GetTeams(competetionId)
            .then(teams=>{
                dispatch(loadCompetetionsTeamsSuccess(teams));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}

export function loadTeamFixture(teamId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetTeamFixtures(teamId)
            .then(fixtures=>{
                debugger;
                dispatch(loadTeamFixturesSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}