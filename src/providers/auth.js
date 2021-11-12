import React from "react";


export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const jwt = JSON.parse(localStorage.getItem('jwt'))

    return (
        <AuthContext.Provider value={{ jwt }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);