import { handleLoginApi } from '../../services/userService';
import actionTypes from './actionTypes';

export const UserLogin = () => {
    return async (dispatch, getState) => {
        try {

            let res = await handleLoginApi()
            if (res && res.errCode === 0) {
                dispatch(logInSuccess(res.data))
            } else {
                dispatch(logInFail())
            }
        } catch (e) {
            dispatch(logInFail())
            console.log("logInFail ", e)
        }
    }
}

export const logInSuccess = (userAccout) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    // data: userAccout
})

export const logInFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

