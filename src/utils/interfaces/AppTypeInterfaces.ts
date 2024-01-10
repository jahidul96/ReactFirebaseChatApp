export interface messageInterface {
    senderId: string;
    text: string;
    media: boolean;
    fileUrl: string;
    delivered: boolean;
    seen: boolean;
    createdAt: number;
}

export interface messageInterfaceWithDocId {
    messageDetails: messageInterface;
    docId: string;
}

export interface userDataInterface {
    name: string;
    uid: string;
    profilePic: string;
    createdAt: number;
    updatedAt: number;
    bio: string;
    email: string;
}

export interface chatInterFace {
    lastMsg: string;
    media: boolean;
    lastMsgAt: number;
    createdAt: number;
    chatInfos: userDataInterface; // in here when it's oneToOneChat we will send senderDetails when group we will send groupDetail(like profilepic etc)
    delivered: boolean;
    chatId: string;
    seen: boolean;
    senderId: string;
}
