import { put, call, takeLatest } from "redux-saga/effects";
import { ERROR_GET_USERS, GET_USERS, SUCCESS_GET_USERS } from "../actions/user";
import { apiCall } from "../api";
const urlGetUser = "https://jsonplaceholder.typicode.com/users";

function* getUsers({ payload }) {
    try {
        const result = yield call(apiCall, 'get', urlGetUser)
        yield put({ type: SUCCESS_GET_USERS, users: result});
    } catch (error) {
        yield put({ type: ERROR_GET_USERS,  users:[]});
    }
}

function* addUsers({ payload }) {
    try {
        
    } catch (error) {
        
    }
}

function* deleteUsers({ payload }) {
    try {
        
    } catch (error) {
        
    }
}

function* editUsers({ payload }) {
    try {
        
    } catch (error) {
        
    }
}

// Wtchers
export default function* users() {
    yield takeLatest(GET_USERS, getUsers);
    // yield takeLatest(ACTION_NAME, addUsers);
    // yield takeLatest(ACTION_NAME, deleteUsers);
    // yield takeLatest(ACTION_NAME, editUsers);
}