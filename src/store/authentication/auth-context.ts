import { createContext } from 'react';

export const initialAuthState: any = {
    isAuthenticated: false,
}

export const AuthContext = createContext(initialAuthState);