import axios from 'axios';
import * as types from './actionTypes';

export const register = (payload)=>(dispatch)=>{
    dispatch({type : types.SIGNUP_REQUEST});
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",payload)
        .then((r)=> {
            dispatch({type : types.SIGNUP_REQUEST, payload: r.data});
            return types.SIGNUP_SUCCESS;
        })
        .catch((e)=>{dispatch({type: types.SIGNUP_FALIURE});
        return types.SIGNUP_FALIURE;
    })
}

export const login = (params) =>(dispatch)=>{
    dispatch({type : types.LOGIN_REQUEST});
    return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params)
            .then((r)=>{
                dispatch({type : types.LOGIN_SUCCESS, payload : r.data});
                return types.LOGIN_SUCCESS;
            })
            .catch((e)=>{
                dispatch({type: types.LOGIN_FALIURE});
                return types.LOGIN_FALIURE;
            })
}