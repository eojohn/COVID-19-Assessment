import * as consts from '../../store/Constants';

export const setTaste = (n) => {
    return dispatch => {
        dispatch({
            type:consts.TASTE,
            payload:n
        })
    }
}
export const nextQues = () => {
    return (dispatch,getState) => {
        const {nav} = getState();
        if(nav.hideSmoke){
            dispatch({
                type:consts.SHOW_BREATH,
                payload:true
            })
        }else{
            dispatch({
                type:consts.SHOW_SMOKE,
                payload:true
            })
        }
         
    }
}