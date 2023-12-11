import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase_config";

export const addUserToFB = async (info: any, id: any) => {
    await setDoc(doc(db, "Users", id), info);
};

export const getCurrentUser = async (uid: string) => {
    const userRef = doc(db, "Users", uid);
    const userSnap = await getDoc(userRef);
    let user;
    if (userSnap.exists()) {
        user = userSnap.data();
    } else {
        user = null;
    }
    return user;
};
