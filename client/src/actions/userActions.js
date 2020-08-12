import {userTypes} from "./userTypes";
import axios from "axios";
import {authHeader} from "../shared/authHeader";
import {examsTypes} from "./examTypes";
import {sorter} from "../shared/util";


// function getFirstName(name) {
//     return name.split(' ').slice(0, -1).join(' ');
// }
//
// function getLastName(name) {
//     return name.split(' ').slice(-1).join(' ');
// }

function getUsersUrl() {
    return "http://localhost:8080/api/users";
}

function getRegisterUrl() {
    return "http://localhost:8080/api/users/register"
}

function getLoginUrl() {
    return "http://localhost:8080/api/users/authenticate"
}

function getUserUrl(name) {
    return `http://localhost:8080/api/users/${name}`
}


function fetchUsersFailed(e) {
    return {
        type: userTypes.FETCH_USERS_FAILURE,
        payload: e
    }
}

function fetchUserFailed(e) {
    return {
        type: userTypes.FETCH_USER_FAILURE,
        payload: e
    }
}

function registerUserFailed(e) {
    return {
        type: userTypes.REGISTER_FAILURE,
        payload: e
    }
}

function updateUserFailed(e) {
    return {
        type: userTypes.UPDATE_USER_FAILURE,
        payload: e
    }
}

function deleteUserFailed(e) {
    return {
        type: userTypes.DELETE_USER_FAILURE,
        payload: e
    }
}

function loginUserFailed(e) {
    return {
        type: userTypes.LOGIN_FAILURE,
        payload: e
    }
}


export const fetchUsers = () => async dispatch => {
    try {
        const response = await axios.get(getUsersUrl(),{
            headers:authHeader()
        });
        console.log("Response: ",response);
        return await dispatch({
            type: userTypes.FETCH_USERS,
            payload: response.data
        });
    } catch (e) {
        console.log("Error",e);
        dispatch(fetchUsersFailed(e));
    }
};

export const fetchUser = (name) => async dispatch => {
    try {
        const response = await axios.get(getUserUrl(name),{
            headers:authHeader()
        });
        console.log(response);
        return await dispatch({
            type: userTypes.FETCH_USER,
            payload: response.data
        });
    } catch (e) {
        console.log(e);
        dispatch(fetchUserFailed(e))
    }
};


export const registerUser = (user) => async dispatch => {
    try {
        console.log("before post", user);
        const response = await axios.post(getRegisterUrl(), user);
        console.log("Response", response);
        return await dispatch({
            type: userTypes.REGISTER,
            payload: response
        });
    } catch (e) {
        console.log(e.response);
        dispatch(registerUserFailed(e))
    }
};

export const loginUser = (userName, password) => async dispatch => {
    try {
        const response = await axios.post(getLoginUrl(),JSON.stringify({userName,password}),{
            headers: {"Content-Type" : "application/json"},
        });
        console.log("Response", response);
        return await dispatch({
            type: userTypes.LOGIN,
            payload: response
        });
    } catch (e) {
        console.log(e.response);
        dispatch(loginUserFailed(e))
    }
};


export const startEditing = () => dispatch => {
    return dispatch({
        type: userTypes.EDITING_ON,
        payload: true
    });
};

export const stopEditing = () => dispatch => {
    return dispatch({
        type: userTypes.EDITING_OFF,
        payload: false
    });
};


export const updateUser = (user) => async dispatch => {
    try {
        console.log("before post", user);
        const urlToPUT = getUsersUrl() + `/${user.uid}`;
        const response = await axios.put(urlToPUT, user,{
            headers:authHeader()
        });
        console.log("Response", response);
        return await dispatch({
            type: userTypes.UPDATE_USER,
            payload: response
        });
    } catch (e) {
        dispatch(updateUserFailed(e));
        console.log(e.response);
    }
};

export const deleteUser = (user) => async dispatch => {
    try {
        const urlToDelete = getUsersUrl() + `/${user.uid}`;
        const response = await axios.delete(urlToDelete,{
            headers:authHeader()
        });

        return await dispatch({
            type: userTypes.DELETE_USER,
            payload: response
        });
    } catch (e) {
        console.log(e.response);
        dispatch(deleteUserFailed(e));
    }
};


export const filter = (array, event) => dispatch => {

    const {name, value} = event.target;
    console.log("Name ~ Value: ", name, value);
    return dispatch({
        type: userTypes.FILTER_USERS,
        payload: value === "" ? array : array.filter(user => user[`${name}`].toLowerCase().includes(value.toLowerCase()))
    });
};

export const logout = () => dispatch => {

    try {
        const response = axios.delete("http://localhost:8080/api/users/logout",{
            headers:authHeader()
        });

        return dispatch({
            type: userTypes.LOGOUT,
            payload: response
        })
    }
    catch (e) {
        console.log(e);
    }
};


export const sort = (array, event) => dispatch => {
    const {name, value} = event.target;
    console.log("Name", name);
    console.log("Value: ",value);
    const sortingBy = value.split(' ').slice(0,-1).join(' ');
    const order = value.split(' ').slice(-1).join(' ');
    return dispatch({
        type: userTypes.SORT_USERS,
        payload: value === "" ? array : array.sort(sorter(sortingBy,order))
    });
};
