import * as urls from './url';

const token ="9dd56985d92c40d997bb658abf24d77f";

class ApiMethods {


    static GetNextFixtures(){
        return fetch(urls.GET_NEXT_FIXTURES,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method: "GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetFixturesByTime(time){
        let url= "http://api.football-data.org/v1/fixtures?timeFrame="+time;
        return fetch(url,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetFixtureByLeagueCode(league){
        let code =league;
        return fetch(urls.GET_NEXT_FIXTURES_BY_LEAGUECODE,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetCompetetionFixtures(competetionId){
        let competetion=competetionId;
        let url ="http://api.football-data.org/v1/competitions/"+competetion+"/fixtures";
        return fetch(url,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){

            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetCompetetionFixturesByTime(timeValue){
        let day=timeValue;
        return fetch(urls.GET_COMPETETION_BY_TIME_FIXTURES,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetCompetetionFixturesByMatchDay(competetionId,matchDay){
        let competetion=competetionId;
        let time = matchDay;
        return fetch(urls.GET_COMPETETION_BY_MATCHDAY_FIXTURES,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetTeamFixtures(teamId){
        let url ="http://api.football-data.org/v1/teams/"+teamId+"/fixtures";
        return fetch(url,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetTeamFixturesBySeason(teamId,seasonYear){
        let team = teamId;
        let season = seasonYear;
        return fetch(urls.GET_TEAM_BY_SEASON_FIXTURES,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetTeamFixturesByTIMEFRAME(teamId,timeFrame){
        let team = teamId;
        let time = timeFrame;
        return fetch(urls.GET_TEAM_BY_TIMEFRAME_FIXTURES,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetTeam(teamid){

        return fetch(urls.GET_TEAM+teamid,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
    static GetPlayers(teamid){
        let url = "http://api.football-data.org/v1/teams/"+teamid+"/players";
        return fetch(url,{
            headers: new Headers({
                'X-Auth-Token': token
            }),
            method:"GET"
        }).then(function(response){
            return response.json();
        }).catch(error=>{
            return error;
        });
    }
}

export default ApiMethods;