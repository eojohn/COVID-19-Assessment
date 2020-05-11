import * as consts from '../../store/Constants';

export const setBreath = (n) => {
    return dispatch => {
        dispatch({
            type:consts.BREATH,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_COUGH,
             payload:true
         })
    }
}
export const hasAsthma = () => {
    return dispatch => {
         dispatch({
             type:consts.ASTHMA,
             payload:true
         })
    }
}