import {createStore, applyMiddleware} from "redux"
import reduxSaga from 'redux-saga';
import { ADD_USER, DElETE_USER, SUCCESS_ADD_USER, SUCCESS_DElETE_USER, SUCCESS_GET_USERS, SUCCES_EDIT_USER } from "../actions/user";
import rootSaga from '../sagas/index';

const initialState = {
    users:[] 
}

const reducerUser = (state = initialState, action) => {
    console.log(action)
    if (action.type === SUCCESS_ADD_USER){
        return {
            ...state,
            users : state.users.concat(action.user)
        }
    }

    if (action.type === SUCCESS_DElETE_USER){
        return {
            ...state,
            users : state.users.concat(action.user)
        }
    }

    if (action.type === SUCCES_EDIT_USER){
        return {
            ...state,
            users : state.users.concat(action.user)
        }
    }

    if (action.type === SUCCESS_GET_USERS){
        return {
            ...state,
            users : state.users.concat(action.users)
        }
    }

    return state
}

const segaMiddleware = reduxSaga();

export default () => {
    return {
        ...createStore(reducerUser, applyMiddleware(segaMiddleware)),
        runSaga: segaMiddleware.run(rootSaga)
    }
}