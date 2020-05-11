import * as consts from '../../store/Constants';

export const setPoop = (n) => {
    return dispatch => {
        dispatch({
            type:consts.POOP,
            payload:n
        })
    }
}
export const nextQues = () => {
    return (dispatch) => {
        dispatch({
            type:consts.SHOW_FOOT,
            payload:true
        })
         
    }
}