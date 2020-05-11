import {combineReducers} from 'redux';
import answers from './answerReducer';
import nav from './navigationReducer';
const rootReducer = combineReducers({answers,nav});
export default rootReducer;