import * as consts from '../../store/Constants';

export const setWeight = (n) => {
    return dispatch => {
        dispatch({
            type:consts.WEIGHT,
            payload:n
        })
    }
}
export const setUnit = (n) => {
    return dispatch => {
        dispatch({
            type:consts.LBS,
            payload:n
        })
    }
}
export const nextQues = () => {
    return dispatch => {
         dispatch({
             type:consts.SHOW_SMELL,
             payload:true
         })
    }
}