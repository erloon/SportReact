import * as types from './actionsTypes';
import competetionApi from '../api/competetionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCurrentCompetetionsSuccess(competetions){
    return {type: types.LOAD_CURRENT_COMPETETIONS_SUCCESS, competetions};
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
