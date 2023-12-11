import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase_config";

export const fbUserRegister = (email: any, password: any) => {
    const promise = new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                resolve(user.user.uid);
            })
            .catch((err) => {
                reject(err);
            });
    });

    return promise;
};

export const signinWithFb = (email: any, password: any) => {
    const promise = new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                resolve(user.user.uid);
            })
            .catch((err) => {
                reject(err);
            });
    });

    return promise;
};
