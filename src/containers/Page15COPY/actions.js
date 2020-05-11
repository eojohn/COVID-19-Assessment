import * as consts from '../../store/Constants';

export const setFoot = (n) => {
    return dispatch => {
        dispatch({
            type:consts.FOOT,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_HEAD,
             payload:true
         })
    }
}