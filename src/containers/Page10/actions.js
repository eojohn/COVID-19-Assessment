import * as consts from '../../store/Constants';

export const setCough = (n) => {
    return dispatch => {
        dispatch({
            type:consts.COUGH,
            payload:n
        })
    }
}
export const skipCough = () => {
    return dispatch => {
        dispatch({
            type:consts.SKIP_COUGH,
            payload:true
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_RECORD,
             payload:true
         })
    }
}