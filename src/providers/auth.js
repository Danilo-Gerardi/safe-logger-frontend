import React, { useEffect, useState } from "react";


export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [user, setUser] = useState({
        name: ''
    });

    const [organization, setOrganization] = useState({
        name: ''
    });

    useEffect(() => {
        const userStorage = localStorage.getItem('user');
        if (userStorage) {
            setUser(JSON.parse(userStorage));
        } else {
            setUser({
                name: ''
            })
        }

        const organizationStorage = localStorage.getItem('organization');
        if (organizationStorage) {
            setOrganization(JSON.parse(organizationStorage));
        } else {
            setOrganization({
                name: ''
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, organization }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);