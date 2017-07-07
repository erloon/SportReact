import * as types from './actionsTypes';
import api from '../api/apiMethods';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadNextFixturesSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_SUCCESS, fixtures};
}
export function loadFixturesByTimeSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_BY_TIME_SUCCESS, fixtures};
}
export function loadFixturesByLeagueCodeSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_BY_LEAGUE_CODE_SUCCESS, fixtures};
}
export function loadompetetionFixturesSuccess(fixtures){
    return {type: types.LOAD_COMPETETION_FIXTURES_SUCCESS, fixtures};
}
export function loadCompetetionFixturesByTimeSuccess(fixtures){
    return {type: types.LOAD_COMPETETION_FIXTURES_BY_TIME_SUCCESS, fixtures};
}
export function loadCompetetionFixturesByMatchDaySuccess(fixtures){
    return {type: types.LOAD_COMPETETION_FIXTURES_BY_MATCHDAY_SUCCESS, fixtures};
}
export function loadTeamFixturesSuccess(fixtures){
    return {type: types.LOAD_TEAM_FIXTURES_SUCCESS, fixtures};
}
export function loadTeamFixturesBySeasonSuccess(fixtures){
    return {type: types.LOAD_TEAM_FIXTURES_BY_SEASON_SUCCESS, fixtures};
}
export function loadTeamFixturesByTimeFrameSuccess(fixtures){
    return {type: types.LOAD_TEAM_FIXTURES_BY_TIMEFRAME_SUCCESS, fixtures};
}



export function loadNextFixtures(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetNextFixtures()
            .then(fixtures=>{
                dispatch(loadNextFixturesSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadFixturesByTime(time){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetFixturesByTime(time)
            .then(fixtures=>{
                dispatch(loadFixturesByTimeSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadFixturesByLeagueCode(league){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetFixtureByLeagueCode(league)
            .then(fixtures=>{
                dispatch(loadFixturesByLeagueCodeSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadCompetetionFixtures(competetionId){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetCompetetionFixtures(competetionId)
            .then(fixtures=>{
                dispatch(loadompetetionFixturesSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadCompetetionFixturesByTime(timeValue){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetCompetetionFixturesByTime(timeValue)
            .then(fixtures=>{
                dispatch(loadCompetetionFixturesByTimeSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadCompetetionFixturesByMatchDay(competetionId,matchDay){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetCompetetionFixturesByMatchDay(competetionId,matchDay)
            .then(fixtures=>{
                dispatch(loadCompetetionFixturesByMatchDaySuccess(fixtures));
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
                dispatch(loadTeamFixturesSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadTeamFixturesBySeason(teamId,seasonYear){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetTeamFixturesBySeason(teamId,seasonYear)
            .then(fixtures=>{
                dispatch(loadTeamFixturesBySeasonSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadTeamFixturesByTimeFrame(teamId,timeFrame){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetTeamFixturesBySeason(teamId,timeFrame)
            .then(fixtures=>{
                dispatch(loadTeamFixturesByTimeFrameSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
