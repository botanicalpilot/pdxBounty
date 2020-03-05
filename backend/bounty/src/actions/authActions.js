import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("users/login", userData)
        .then(res => history.push("/login"))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - get user token
export const loginUser = userData => dispatch => {
    axios
        .post("/users/login", userData)
        .then(res => {
            // save to localStorage

            // set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);

            // Set token to auth header
            setAuthToken(token);

            // decode token to get user data
            const decoded = jwt_decode(token);

            // set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Logout user
export const logoutUser = () => dispatch => {
    // remove from local storage
    localStorage.removeItem("jwtToken");

    // remove auth header for future requests
    setAuthToken(false);

    // set current user to empty object {} which will set
    // isAuthenticated to false
    dispatch(setCurrentUser({}));
};