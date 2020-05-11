import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../Reducers';

let reduxCompose = compose;
if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore =()=>{
    return createStore(Reducers,reduxCompose(applyMiddleware(thunk)));
}

export default configureStore;