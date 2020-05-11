import * as consts from '../../store/Constants';

export const setFever = (n) => {
    return dispatch => {
        dispatch({
            type:consts.FEVER,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_MIN_RESULTS,
             payload:true
         })
    }
}