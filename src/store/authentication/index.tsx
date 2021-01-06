import { useReducer } from 'react';

import { authReducer } from './auth-reducer';
import { AuthContext, initialAuthState } from './auth-context'; 

export const AuthStateProvider: React.FC = (props) => {
    const [authState, dispatchAuthEvents] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authState, dispatch: dispatchAuthEvents }}>
            {props.children}
        </AuthContext.Provider>
    )
}

// export members for smaller relative paths
export * from './auth-context';
export * from './auth-constants';
export * from './auth-reducer';