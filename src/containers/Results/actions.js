import * as consts from '../../store/Constants';

export const setSymptom = (s) => {
    return dispatch => {
        dispatch({
            type:consts.SYMPTOM,
            payload:s
        })
    }
}