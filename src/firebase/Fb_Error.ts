import { toast } from "react-toastify";

export const fbErrorDetect = (errorCode: any) => {
    if (errorCode === "auth/email-already-in-use") {
        return toast.warn("email-already-in-use", {
            position: "bottom-right",
        });
    }
    if (errorCode === "auth/invalid-password") {
        return toast.warn("invalid-password", {
            position: "bottom-right",
        });
    }

    return toast.error("Something Went Wrong", {
        position: "bottom-right",
    });
};
