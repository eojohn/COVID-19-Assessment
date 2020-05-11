import * as consts from '../../store/Constants';

export const setDry = (n) => {
    return dispatch => {
        dispatch({
            type:consts.DRY,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_POOP,
             payload:true
         })
    }
}