import * as types from './actionsTypes';
import api from '../api/apiMethods';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadNextFixturesSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_SUCCESS, fixtures};
}
export function loadFixturesByTimeSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_BY_TIME_SUCCESS, fixtures};
}
export function loadYesterdayFixturesSuccess(fixtures){
    return {type: types.LOAD_YESTERDAY_FIXTURES_SUCCESS, fixtures};
}
export function loadTomorrowFixturesSuccess(fixtures){
    return {type: types.LOAD_TOMORROW_FIXTURES_SUCCESS, fixtures};
}
export function loadFixturesByLeagueCodeSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_BY_LEAGUE_CODE_SUCCESS, fixtures};
}
export function loadCompetetionFixturesSuccess(competetionFixtures){
    return {type: types.LOAD_COMPETETION_FIXTURES_SUCCESS, competetionFixtures};
}
export function loadCompetetionFixturesByTimeSuccess(fixtures){
    return {type: types.LOAD_COMPETETION_FIXTURES_BY_TIME_SUCCESS, fixtures};
}
export function loadCompetetionFixturesByMatchDaySuccess(fixtures){
    return {type: types.LOAD_COMPETETION_FIXTURES_BY_MATCHDAY_SUCCESS, fixtures};
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
            .then(competetionFixtures=>{
                dispatch(loadCompetetionFixturesSuccess(competetionFixtures));
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
export function loadYesterdayFixtures(){
    let time="p1";
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetFixturesByTime(time)
            .then(fixtures=>{
                dispatch(loadYesterdayFixturesSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
export function loadTomorrowFixtures(){
    let time="n2";
    return function(dispatch){
        dispatch(beginAjaxCall());
        return api.GetFixturesByTime(time)
            .then(fixtures=>{
                dispatch(loadTomorrowFixturesSuccess(fixtures));
            })
            .catch(error=>{
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}
