import * as consts from '../../store/Constants';

export const setGender = (n) => {
    return dispatch => {
        dispatch({
            type:consts.GENDER,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_HEIGHT,
             payload:true
         })
    }
}