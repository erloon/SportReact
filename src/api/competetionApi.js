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

static GetFixtures(){
    return fetch()
}

}

export default CompetetionApi;