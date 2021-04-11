import {createStore, applyMiddleware} from "redux"
import reduxSaga from 'redux-saga';
import {  ADD_USER, DElETE_USER, EDIT_USER, GET_USERS, SUCCESS_ADD_USER, SUCCESS_DElETE_USER, SUCCESS_GET_USERS, SUCCES_EDIT_USER } from "../actions/user";
import rootSaga from '../sagas/index';

const initialState = {
    users:[],
    loading:false,
}

const reducerUser = (state = initialState, action) => {
    if (action.type === GET_USERS){
        return {
            ...state,
            loading:true
        }
    }

    if (action.type === ADD_USER){
        return {
            ...state,
            loading:true
        }
    }

    if (action.type === EDIT_USER){
        return {
            ...state,
            loading:true
        }
    }

    if (action.type === DElETE_USER){
        return {
            ...state,
            loading:true
        }
    }

    if (action.type === SUCCESS_ADD_USER){
        return {
            ...state,
            loading:false,
            users : state.users.concat(action.user)
        }
    }

    if (action.type === SUCCESS_DElETE_USER){

        return {  
            ...state,
            loading:false,
            users: state.users.filter(e => e.id !== Number(action.user))                     
          }
    }

    if (action.type === SUCCES_EDIT_USER){
        const index = state.users.findIndex(e => e !== action.user); //finding index of the item                                                    
        const newArray = [...state.users]; //making a new array
        newArray[index] = action.user//changing value in the new array
        return {
            ...state,
            loading:false,
            users : newArray
        }
    }

    if (action.type === SUCCESS_GET_USERS){
        return {
            ...state,
            loading:false,
            users : [...action.users]
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
