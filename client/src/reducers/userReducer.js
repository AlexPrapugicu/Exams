import initialState from "./initialState";
import {userTypes} from "../actions/userTypes";


export default function (state = initialState.usersObj, action) {
    switch (action.type) {

        case userTypes.FETCH_USERS:
            console.log("FETCH_USERS TEST: ", action.payload);
            return {
                ...state,
                users: action.payload
            };
        case userTypes.FETCH_USERS_FAILURE:
            console.log("FETCH_USERS FAILURE TEST: ", action.payload);
            return {
                ...state,
                error: action.payload
            };

        case userTypes.FETCH_USER:
            console.log("FETCH USER TEST: ", action.payload);
            return {
                ...state,
                user: action.payload,
                editedUser: action.payload
            };
        case userTypes.FETCH_USER_FAILURE:
            console.log("FETCH_USER FAILURE TEST: ", action.payload);
            return {
                ...state,
                error: action.payload
            };

        case userTypes.REGISTER:
            console.log("REGISTER USER TEST: ", action.payload);
            return {
                ...state,
            };
        case userTypes.REGISTER_FAILURE:
            console.log("REGISTER FAILURE TEST: ", action.payload);
            return {
                ...state,
                error: action.payload
            };


        case userTypes.LOGIN:
            console.log("LOGIN USER TEST: ", action.payload);
            return {
                ...state,
            };
        case userTypes.LOGIN_FAILURE:
            console.log("LOGIN FAILURE TEST: ", action.payload);
            return {
                ...state,
                error: action.payload
            };


        case userTypes.UPDATE_USER:
            console.log("UPDATE USER TEST: ", action.payload);
            return {
                ...state,
                editMode: false
            };
        case userTypes.UPDATE_USER_FAILURE:
            console.log("UPDATE_USER FAILURE TEST: ", action.payload);
            return {
                ...state,
                error: action.payload
            };

            case userTypes.DELETE_USER:
            console.log("DELETE_USER  TEST: ", action.payload);
            return {
                ...state,
                editMode: false
            };
        case userTypes.DELETE_USER_FAILURE:
            console.log("DELETE_USER_FAILURE  TEST: ", action.payload);
            return {
                ...state,
                error: action.payload
            };

        case userTypes.EDITING_ON:
            console.log("EDITING ON: ",action.payload);
            return {
                ...state,
              editMode: action.payload
            };
        case userTypes.EDITING_OFF:
            console.log("EDITING OFF: ",action.payload);
            return {
                ...state,
              editMode: action.payload
            };
        default:
            return state;
    }
}
