import * as consts from '../../store/Constants';

export const isAsymp = () => {
    return dispatch => {
        dispatch({
            type:consts.ASYMP,
            payload:true
        })
    }
}
export const hasCovid = () => {
    return dispatch => {
        dispatch({
            type:consts.HAS_COVID,
            payload:true
        })
    }
}