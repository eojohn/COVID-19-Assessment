import * as consts from '../../store/Constants';

export const setRecord = (n) => {
    return dispatch => {
        dispatch({
            type:consts.RECORD,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_PHLEGM,
             payload:true
         })
    }
}