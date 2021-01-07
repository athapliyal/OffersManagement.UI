import { createContext } from 'react';

const isAuthenticated = localStorage.getItem('isAuthenticated');

export const initialAuthState: any = {
    isAuthenticated: isAuthenticated === "true" ? true : false
}

export const AuthContext = createContext(initialAuthState);