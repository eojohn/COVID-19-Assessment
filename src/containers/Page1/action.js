import * as consts from '../../store/Constants';

export const startTest = () => {
    return dispatch => {
         dispatch({
             type:consts.START_TEST,
             payload:true
         })
    }
}