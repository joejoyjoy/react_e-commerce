import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const AuthContext = createContext();
const userFromLocalStorage = JSON.parse(localStorage.getItem("user") || '[]')

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(userFromLocalStorage[0] ?? '');
    const [email, setEmail] = useState(userFromLocalStorage[1] ?? '');
    const [pswd, setPswd] = useState(userFromLocalStorage[2] ?? '');
    const [avatar, setAvatar] = useState(userFromLocalStorage[3] ?? '');

    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('auth') ?? false
    );

    const login = useCallback(function () {
        const value = [user,email,pswd,avatar];

        localStorage.setItem('auth', true);
        localStorage.setItem('user', JSON.stringify(value));
        setIsAuthenticated(true);
    }, [user, email, pswd, avatar]);

    const logout = useCallback(function () {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated,
        user,
        setUser,
        email,
        setEmail,
        pswd,
        setPswd,
        avatar,
        setAvatar
    }),
        [login, logout, isAuthenticated, user, setUser, email, setEmail, pswd, setPswd, avatar, setAvatar]
    );

    useEffect(() => {
        const value = [user,email,pswd,avatar];

        localStorage.setItem("user", JSON.stringify(value))
    }, [user, email, pswd, avatar])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuthContext() {
    return useContext(AuthContext);
}
