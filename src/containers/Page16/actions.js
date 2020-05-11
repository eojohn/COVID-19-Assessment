import * as consts from '../../store/Constants';

export const setHead = (n) => {
    return dispatch => {
        dispatch({
            type:consts.HEAD,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_FEVER,
             payload:true
         })
    }
}