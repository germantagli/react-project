export const ADD_USER ="ADD_USER";
export const SUCCESS_ADD_USER ="SUCCESS_ADD_USER";
export const ERROR_ADD_USER ="ERROR_ADD_USER";

export const DElETE_USER ="DElETE_USER";
export const SUCCESS_DElETE_USER ="SUCCESS_DElETE_USER";
export const ERROR_DElETE_USER ="ERROR_DElETE_USER";

export const EDIT_USER ="EDIT_USER";
export const SUCCES_EDIT_USER ="SUCCES_EDIT_USER";
export const ERROR_EDIT_USER ="ERROR_EDIT_USER";

export const GET_USERS ="GET_USERS";
export const SUCCESS_GET_USERS ="SUCCESS_GET_USERS";
export const ERROR_GET_USERS ="ERROR_GET_USERS";

//ADD USER
export const startAddUsers = payload => ({
    type: ADD_USER,
    ...payload
})

export const successAddUsers = payload => ({
    type: SUCCESS_ADD_USER,
    ...payload
})

export const errorAddUsers = payload => ({
    type: ERROR_ADD_USER,
    ...payload
})

//GET USERS
export const startGetUsers = payload => ({
    type: GET_USERS,
    ...payload
})

export const successGetUsers = payload => ({
    type: SUCCESS_GET_USERS,
    ...payload
})

export const errorGetUsers = payload => ({
    type: ERROR_GET_USERS,
    ...payload
})