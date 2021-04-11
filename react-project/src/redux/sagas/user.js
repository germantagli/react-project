import { put, call, takeLatest } from "redux-saga/effects";
import { ADD_USER, EDIT_USER, ERROR_ADD_USER, ERROR_EDIT_USER, ERROR_GET_USERS, GET_USERS, SUCCESS_ADD_USER, SUCCESS_GET_USERS, SUCCES_EDIT_USER } from "../actions/user";
import { apiCall } from "../api";
const urlGetUser = "https://jsonplaceholder.typicode.com/users";

function* getUsers({ payload }) {
    try {
        const result = yield call(apiCall, 'get', urlGetUser)
        yield put({ type: SUCCESS_GET_USERS, users: result});
    } catch (error) {
        yield put({ type: ERROR_GET_USERS, error});
    }
}

function* addUsers( payload ) {
    console.log(payload)
    try {
        const result = yield call(apiCall, 'post', urlGetUser, JSON.stringify(payload))
        yield put({ type: SUCCESS_ADD_USER, user: result});
    } catch (error) {
        yield put({ type: ERROR_ADD_USER,  error});
    }
}

function* deleteUsers({ payload }) {
    try {
        
    } catch (error) {
        
    }
}

function* editUser(payload) {
    try {
        const result = yield call(apiCall, 'post', urlGetUser, JSON.stringify(payload))
        yield put({ type: SUCCES_EDIT_USER, user: result});
    } catch (error) {
        yield put({ type: ERROR_EDIT_USER,  error});
    }
}

// Wtchers
export default function* users() {
    yield takeLatest(GET_USERS, getUsers);
    yield takeLatest(ADD_USER, addUsers);
    yield takeLatest(EDIT_USER, editUser);
    // yield takeLatest(ACTION_NAME, editUsers);
}