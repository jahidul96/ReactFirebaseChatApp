export interface chatTextInterface {
    senderId: number;
    text: string;
}

export interface userDataInterface {
    name: string;
    uid: string;
    profilePic: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string;
}
