import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase_config";

export const uploadFileToStorage = (image: any) => {
    const promise = new Promise(async (resolve, reject) => {
        const imagesRef = ref(storage, `profilepic/${Date.now() + image.name}`);
        const uploadTask = uploadBytesResumable(imagesRef, image);
        return uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });

    return promise;
};
