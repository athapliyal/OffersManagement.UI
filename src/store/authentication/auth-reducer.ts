import { IAction } from '../actions';
import { SET_IS_AUTHENTICATED_SUCCESS, SET_IS_AUTHENTICATED_FAIL } from './auth-constants';

export interface IAuthenticationState {
    isAuthenticated: boolean,
}

interface IAuthenticationAction extends IAction {
    type: typeof SET_IS_AUTHENTICATED_SUCCESS | typeof SET_IS_AUTHENTICATED_FAIL;
    value: {
        isAuthenticated: boolean
    };
}

export const authReducer = (state: IAuthenticationState, action: IAuthenticationAction) => {
    switch (action.type) {
        case SET_IS_AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: action.value.isAuthenticated,
            }
        case SET_IS_AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            }
        default: return state;
    }
}