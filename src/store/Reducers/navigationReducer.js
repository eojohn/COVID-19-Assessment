import * as consts from '../Constants';
const initState= {
    startTest:false,
    showGender:false,
    showGender:false,
    showWeight:false,
    showSmell:false,
    showTaste:false,
    showSmoke:false,
    showBreath:false,
    showCough:false,
    showRecord:false,
    showPhelgm:false,
    showDry:false,
    showPoop:false,
    showHead:false,
    showFever:false,
    showMinResults:false,
    hideSmoke:false,
    skipCough:false,
    showFoot:false
}
const navigationReducer = (state=initState,action) => {
    switch(action.type){
        case consts.START_TEST:
            return{
                ...state,
                startTest:action.payload
            }
        case consts.SHOW_GENDER:
            return{
                ...state,
                showGender:action.payload
            }
        case consts.SHOW_HEIGHT:
            return{
                ...state,
                showHeight:action.payload
            }
        case consts.SHOW_WEIGHT:
            return{
                ...state,
                showWeight:action.payload
            }
        case consts.SHOW_SMELL:
            return{
                ...state,
                showSmell:action.payload
            }
        case consts.SHOW_TASTE:
            return{
                ...state,
                showTaste:action.payload
            }
        case consts.SHOW_SMOKE:
            return{
                ...state,
                showSmoke:action.payload
            }
        case consts.SHOW_BREATH:
            return{
                ...state,
                showBreath:action.payload
            }
        case consts.SHOW_COUGH:
            return{
                ...state,
                showCough:action.payload
            }
        case consts.SHOW_RECORD:
            return{
                ...state,
                showRecord:action.payload
            }
        case consts.SHOW_PHLEGM:
            return{
                ...state,
                showPhelgm:action.payload
            }
        case consts.SHOW_DRY:
            return{
                ...state,
                showDry:action.payload
            }
        case consts.SHOW_POOP:
            return{
                ...state,
                showPoop:action.payload
            }
        case consts.SHOW_HEAD:
            return{
                ...state,
                showHead:action.payload
            }
        case consts.SHOW_FEVER:
            return{
                ...state,
                showFever:action.payload
            }
        case consts.SHOW_MIN_RESULTS:
            return{
                ...state,
                showMinResults:action.payload
            }
        case consts.HIDE_SMOKE:
            return{
                ...state,
                hideSmoke:action.payload
            }
        case consts.SKIP_COUGH:
            return{
                ...state,
                skipCough:action.payload
            }
        case consts.SHOW_FOOT:
            return{
                ...state,
                showFoot:action.payload
            }
        default:
            return state
    }
}
export default navigationReducer;