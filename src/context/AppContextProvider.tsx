import React, { createContext, useState, ReactNode, useEffect } from "react";
import {
    chatInterFace,
    userDataInterface,
} from "../utils/interfaces/AppTypeInterfaces";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase_config";
import {
    getChats,
    getContacts,
    getCurrentUser,
} from "../firebase/Fb_Firestore";

export interface ContextProps {
    user: userDataInterface | null;
    setUser: React.Dispatch<React.SetStateAction<userDataInterface | null>>;
    appLoading: boolean;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    contacts: userDataInterface[] | [];
    chats: chatInterFace[] | [];
}

export const AppContext = createContext<ContextProps | null>(null);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<userDataInterface | null>(null);
    const [appLoading, setAppLaoding] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [contacts, setContacts] = useState<userDataInterface[] | []>([]);
    const [chats, setChats] = useState<chatInterFace[] | []>([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getCurrentUser(user.uid).then((userData: any) => {
                    setUser(userData);
                    // getting contacts/users except current user
                    getContacts(setContacts);
                    // getting all chats
                    getChats(setChats, user.uid);
                    setAppLaoding(false);
                    setIsLogged(true);
                });
            } else {
                console.log("not logged in user");
                setUser(null);
                setAppLaoding(false);
                setIsLogged(false);
            }
        });
    }, []);

    // console.log("contatcs", contacts);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                appLoading,
                isLogged,
                setIsLogged,
                contacts,
                chats,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
