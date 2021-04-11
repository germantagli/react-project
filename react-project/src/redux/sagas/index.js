import { all } from "redux-saga/effects";
import users from "./user";

export default function* rootSaga() {
    yield all([
        users()
    ])
}