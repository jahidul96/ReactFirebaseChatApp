import {
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy,
} from "firebase/firestore";
import { auth, db } from "./firebase_config";
import {
    chatInterFace,
    messageInterface,
    messageInterfaceWithDocId,
    userDataInterface,
} from "../utils/interfaces/AppTypeInterfaces";
import { Dispatch, SetStateAction } from "react";

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

export const getContacts = (
    setContacts: Dispatch<SetStateAction<userDataInterface[] | []>>
) => {
    const cRef = collection(db, "Users");
    const q = query(cRef, where("uid", "!=", auth.currentUser?.uid));
    onSnapshot(q, (querySnapshot) => {
        const users: userDataInterface[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data() as userDataInterface; // Assuming DocumentData is a specific type
            users.push(data);
        });
        setContacts(users);
    });
};

export const getChats = (
    setChats: Dispatch<SetStateAction<chatInterFace[] | []>>,
    userId: string
) => {
    const cRef = collection(db, "Users", userId, "chats");

    onSnapshot(cRef, (querySnapshot) => {
        const users: chatInterFace[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data() as chatInterFace; // Assuming DocumentData is a specific type
            users.push(data);
        });
        setChats(users);
    });
};

// chatting functions
export const oneToOneChat = (
    text: string,
    currentUser: userDataInterface,
    friendDetails: userDataInterface
) => {
    // chat data
    const chatDetailsInfo: chatInterFace = {
        lastMsg: text,
        chatId: friendDetails.uid,
        chatInfos: friendDetails,
        chatMembers: [friendDetails.uid, currentUser.uid],
        createdAt: Date.now(),
        delivered: true,
        isGroupChat: false,
        lastMsgAt: Date.now(),
        media: false,
        seen: false,
        adminDetails: {},
    };

    // message data
    const messageData: messageInterface = {
        text: text,
        fileUrl: "",
        media: false,
        isGroupChat: false,
        senderDetails: currentUser,
        createdAt: Date.now(),
        delivered: true,
        seen: false,
    };

    // add chat to my db
    addChat(currentUser.uid, chatDetailsInfo, friendDetails.uid);
    // adding messages to my db
    addMessage(currentUser.uid, messageData, friendDetails.uid);

    // add to friend db
    chatDetailsInfo.chatId = currentUser.uid;
    chatDetailsInfo.chatInfos = currentUser;
    addChat(friendDetails.uid, chatDetailsInfo, currentUser.uid);
    // adding messages to my friend db
    addMessage(friendDetails.uid, messageData, currentUser.uid);
};

const addChat = async (userId: string, chatData: any, chatId: string) => {
    await setDoc(doc(db, "Users", userId, "chats", chatId), chatData);
};

const addMessage = async (userId: string, messageData: any, chatId: string) => {
    await addDoc(
        collection(db, "Users", userId, "chats", chatId, "messages"),
        messageData
    );
};

// get messages

export const getAllMessages = (
    userId: string,
    chatId: string,
    setMessages: Dispatch<SetStateAction<messageInterfaceWithDocId[] | []>>
) => {
    const cRef = collection(db, "Users", userId, "chats", chatId, "messages");
    const q = query(cRef, orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
        const users: messageInterfaceWithDocId[] = [];
        querySnapshot.forEach((doc) => {
            const data = {
                docId: doc.id,
                messageDetails: doc.data() as messageInterface,
            }; // Assuming DocumentData is a specific type
            users.push(data);
        });
        setMessages(users);
    });
};
