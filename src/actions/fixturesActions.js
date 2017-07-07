import * as types from './actionsTypes';
import api from '../api/apiMethods';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadNextFixturesSuccess(fixtures){
    return {type: types.LOAD_NEXT_FIXTURES_SUCCESS, fixtures};
}

export function loadNextFixtures(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return 
    }
}