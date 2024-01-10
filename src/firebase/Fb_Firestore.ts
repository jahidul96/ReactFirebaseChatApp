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
    getDocs,
    deleteDoc,
    writeBatch,
} from "firebase/firestore";
import { auth, db } from "./firebase_config";
import {
    chatInterFace,
    messageInterface,
    messageInterfaceWithDocId,
    userDataInterface,
} from "../utils/interfaces/AppTypeInterfaces";
import { Dispatch, SetStateAction } from "react";

// create a user
export const addUserToFB = async (info: any, id: any) => {
    await setDoc(doc(db, "Users", id), info, { merge: true });
};

// get current user details
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

// get app contacts
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

//  get already done chats
export const getChats = (
    setChats: Dispatch<SetStateAction<chatInterFace[] | []>>,
    userId: string
) => {
    const cRef = collection(db, "Users", userId, "chats");
    const q = query(cRef, orderBy("lastMsgAt", "desc"));
    onSnapshot(q, (querySnapshot) => {
        const users: chatInterFace[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data() as chatInterFace; // Assuming DocumentData is a specific type
            users.push(data);
        });
        setChats(users);
    });
};

// chatting functions below

//  create one to chat(it will be added in creator side one and friend side one)
export const oneToOneChat = async (
    text: string,
    currentUser: userDataInterface,
    friendDetails: userDataInterface
) => {
    // my chat data
    const chatDetailsInfo: chatInterFace = {
        lastMsg: text,
        chatId: friendDetails.uid,
        chatInfos: friendDetails,
        createdAt: Date.now(),
        delivered: true,
        lastMsgAt: Date.now(),
        media: false,
        seen: true,
        senderId: currentUser.uid,
    };

    // message data
    const messageData: messageInterface = {
        text: text,
        fileUrl: "",
        media: false,
        senderId: currentUser.uid,
        createdAt: Date.now(),
        delivered: true,
        seen: false,
    };

    // add chat to my db
    await addChat(currentUser.uid, chatDetailsInfo, friendDetails.uid);
    // adding messages to my db
    await addMessage(currentUser.uid, messageData, friendDetails.uid);

    // friend chat data
    // const friendChatDetailsInfo: chatInterFace = {
    //     lastMsg: text,
    //     chatId: currentUser.uid,
    //     chatInfos: currentUser,
    //     createdAt: Date.now(),
    //     delivered: true,
    //     lastMsgAt: Date.now(),
    //     media: false,
    //     seen: false,
    //     senderId: currentUser.uid,
    // };

    // add to friend db
    chatDetailsInfo.chatId = currentUser.uid;
    chatDetailsInfo.chatInfos = currentUser;
    chatDetailsInfo.seen = false;
    await addChat(friendDetails.uid, chatDetailsInfo, currentUser.uid);
    // adding messages to my friend db
    await addMessage(friendDetails.uid, messageData, currentUser.uid);
};

// add chat to db
const addChat = async (userId: string, chatData: any, chatId: string) => {
    await setDoc(doc(db, "Users", userId, "chats", chatId), chatData, {
        merge: true,
    });
};

// add messages
const addMessage = async (userId: string, messageData: any, chatId: string) => {
    await addDoc(
        collection(db, "Users", userId, "chats", chatId, "messages"),
        messageData
    );
};

// get single messages

export const getAllMessages = (
    userId: string,
    chatId: string,
    setMessages: Dispatch<SetStateAction<messageInterfaceWithDocId[] | []>>
) => {
    const messageRef = collection(
        db,
        "Users",
        userId,
        "chats",
        chatId,
        "messages"
    );
    const q = query(messageRef, orderBy("createdAt", "asc"));

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

// delete one chat

export const deleteOneChat = async (userId: string, chatId: string) => {
    await deleteMessages(userId, chatId); // Delete messages in the chat
    // deleting whole chat doc from user chat collection
    const chatRef = doc(db, "Users", userId, "chats", chatId);
    await deleteDoc(chatRef);
};

const deleteMessages = async (userId: string, chatId: string) => {
    const messageRef = collection(
        db,
        "Users",
        userId,
        "chats",
        chatId,
        "messages"
    );
    const querySnapshot = await getDocs(messageRef);

    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
    });

    await batch.commit();
};

// update seen status

export const updateSeenStatus = async (userId: string, chatId: string) => {
    await setDoc(
        doc(db, "Users", userId, "chats", chatId),
        { seen: true },
        { merge: true }
    );
};
