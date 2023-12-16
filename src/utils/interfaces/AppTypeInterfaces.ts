export interface messageInterface {
    senderDetails: userDataInterface;
    text: string;
    media: boolean;
    fileUrl: string;
    isGroupChat: boolean;
    delivered: boolean;
    seen: boolean;
    createdAt: Date;
}

export interface messageInterfaceWithDocId {
    messageDetails: messageInterface;
    docId: string;
}

export interface userDataInterface {
    name: string;
    uid: string;
    profilePic: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string;
    email: string;
}

export interface chatInterFace {
    isGroupChat: boolean;
    lastMsg: string;
    media: boolean;
    lastMsgAt: Date;
    createdAt: Date;
    chatMembers: Array<string>;
    chatInfos: userDataInterface; // in here when it's oneToOneChat we will send senderDetails when group we will send groupDetail(like profilepic etc)
    adminDetails: userDataInterface | {}; // in here oneToOne chat {} when group chat group admin details
    delivered: boolean;
    chatId: string;
    seen: boolean;
}
