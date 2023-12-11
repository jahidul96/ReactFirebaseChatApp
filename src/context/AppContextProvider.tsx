import React, { createContext, useState, ReactNode, useEffect } from "react";
import { userDataInterface } from "../utils/interfaces/AppTypeInterfaces";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase_config";
import { getCurrentUser } from "../firebase/Fb_Firestore";

export interface ContextProps {
    user: userDataInterface | null;
    setUser: React.Dispatch<React.SetStateAction<userDataInterface | null>>;
    appLoading: boolean;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<userDataInterface | null>(null);
    const [appLoading, setAppLaoding] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getCurrentUser(user.uid).then((userData: any) => {
                    setUser(userData);
                    setAppLaoding(false);
                    setIsLogged(true);
                });
                // console.log("user", user);
            } else {
                console.log("not logged in user");
                setUser(null);
                setAppLaoding(false);
                setIsLogged(false);
            }
        });
    }, []);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                appLoading,
                isLogged,
                setIsLogged,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
