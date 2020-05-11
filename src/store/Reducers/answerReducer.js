import * as consts from '../Constants';
const initState= {
    age:0,
    height:0,
    gender:0,
    weight:0,
    lbs:true,
    smell:0,
    taste:0,
    smoke:0,
    breath:0,
    cough:0,
    record:{},
    phelgm:0,
    dry:0,
    poop:0,
    head:0,
    fever:0,
    hasCovid:false,
    asymp:false,
    symptom:"",
    asthma:false,
    testBegan:false,
    whiteBG:true,
    reset:false,
    showSkip:false,
    foot:0

}
const answerReducer = (state=initState,action) => {
    switch(action.type){
        case consts.USER_ANSWERS:
            return{
                ...state,
                info:action.payload
            }
        case consts.AGE:
            return{
                ...state,
                age:action.payload
            }
        case consts.HEIGHT:
            return{
                ...state,
                height:action.payload
            }
        case consts.GENDER:
            return{
                ...state,
                gender:action.payload
            }
        case consts.WEIGHT:
            return{
                ...state,
                weight:action.payload
            }
        case consts.LBS:
            return{
                ...state,
                lbs:action.payload
            }
        case consts.SMELL:
            return{
                ...state,
                smell:action.payload
            }
        case consts.TASTE:
            return{
                ...state,
                taste:action.payload
            }
        case consts.SMOKE:
            return{
                ...state,
                smoke:action.payload
            }
        case consts.BREATH:
            return{
                ...state,
                breath:action.payload
            }
        case consts.COUGH:
            return{
                ...state,
                cough:action.payload
            }
        case consts.RECORD:
            return{
                ...state,
                record:action.payload
            }
        case consts.PHLEGM:
            return{
                ...state,
                phelgm:action.payload
            }
        case consts.DRY:
            return{
                ...state,
                dry:action.payload
            }
        case consts.POOP:
            return{
                ...state,
                poop:action.payload
            }
        case consts.HEAD:
            return{
                ...state,
                head:action.payload
            }
        case consts.FEVER:
            return{
                ...state,
                fever:action.payload
            }
        case consts.HAS_COVID:
            return{
                ...state,
                hasCovid:action.payload
            }
        case consts.ASYMP:
            return{
                ...state,
                asymp:action.payload
            }
        case consts.SYMPTOM:
            return{
                ...state,
                symptom:action.payload
            }
        case consts.ASTHMA:
            return{
                ...state,
                asthma:action.payload
            }
        case consts.RESET:
            return{
                ...state,
                reset:action.payload
            }
        case consts.WHITE_BG:
            return{
                ...state,
                whiteBG:action.payload
            }
        case consts.TEST_BEGAN:
            return{
                ...state,
                testBegan:action.payload
            }
        case consts.SHOW_SKIP:
            return{
                ...state,
                showSkip:action.payload
            }
        case consts.FOOT:
            return{
                ...state,
                foot:action.payload
            }
        default:
            return state
    }
}
export default answerReducer;