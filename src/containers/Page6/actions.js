import * as consts from '../../store/Constants';

export const setSmell = (n) => {
    return dispatch => {
        dispatch({
            type:consts.SMELL,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_TASTE,
             payload:true
         })
    }
}