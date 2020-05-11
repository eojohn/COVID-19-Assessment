import * as consts from '../../store/Constants';

export const setPhelgm = (n) => {
    return dispatch => {
        dispatch({
            type:consts.PHLEGM,
            payload:n
        })
    }
}
export const nextQues = (n) => {
    return dispatch => {
        if(n === 0){
            dispatch({
                type:consts.SHOW_DRY,
                payload:true
            })
        }else{
            dispatch({
                type:consts.SHOW_POOP,
                payload:true
            })
        }
    }
}