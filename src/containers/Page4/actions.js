import * as consts from '../../store/Constants';

export const setHeight = (n) => {
    return dispatch => {
        dispatch({
            type:consts.HEIGHT,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_WEIGHT,
             payload:true
         })
    }
}