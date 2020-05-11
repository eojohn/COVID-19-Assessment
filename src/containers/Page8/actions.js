import * as consts from '../../store/Constants';

export const setSmoke = (n) => {
    return dispatch => {
        dispatch({
            type:consts.SMOKE,
            payload:n
        })
    }
}
export const nextQues = (n) => {
    return (dispatch) => {
        if(n === 1){
            dispatch({
                type:consts.SHOW_COUGH,
                payload:true
            })  
        }else{
            dispatch({
                type:consts.SHOW_BREATH,
                payload:true
            })
        }
    }
}