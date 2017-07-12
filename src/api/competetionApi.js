import * as urls from './url';

const token ="9dd56985d92c40d997bb658abf24d77f";

class CompetetionApi {

    static GetCurrent() {
        return fetch(urls.GET_CURRENT_COMPETETION, {
            headers: new Headers({ 'X-Auth-Token': token}),
                method: 'GET'
            }).then(function(response){
                return response.json();
            }).catch(error=>{
                return error;
            });
    }
    static GetLeagueTable(competetionId) {
        let url ="http://api.football-data.org/v1/competitions/"+competetionId+"/leagueTable";
        return fetch(url, {
            headers: new Headers({ 'X-Auth-Token': token}),
                method: 'GET'
            }).then(function(response){
                return response.json();
            }).catch(error=>{
                return error;
            });
    }
    static GetLeagueTableInMatchDay(competetionId,matchDay) {
        let competetion=competetionId;
        let day =matchDay;
        return fetch(urls.GET_LEAGUE_TABELE_IN_MATCHDAY, {
            headers: new Headers({ 'X-Auth-Token': token}),
                method: 'GET'
            }).then(function(response){
                return response.json();
            }).catch(error=>{
                return error;
            });
    }
     static GetTeams(competetionId) {
        let url = "http://api.football-data.org/v1/competitions/"+competetionId+"/teams";
        return fetch(url, {
            headers: new Headers({ 'X-Auth-Token': token}),
                method: 'GET'
            }).then(function(response){
                return response.json();
            }).catch(error=>{
                return error;
            });
    }
}
export default CompetetionApi;