import * as consts from '../../store/Constants';

export const setAge = (n) => {
    return dispatch => {
        dispatch({
            type:consts.AGE,
            payload:n
        })
    }
}
export const hideSmoke = () => {
    return dispatch => {
        dispatch({
            type:consts.HIDE_SMOKE,
            payload:true
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_GENDER,
             payload:true
         })
    }
}