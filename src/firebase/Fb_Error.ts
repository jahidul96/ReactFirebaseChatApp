import { toast } from "react-toastify";

export const fbErrorDetect = (errorCode: any, setLoading: any) => {
    if (errorCode === "auth/email-already-in-use") {
        setLoading(false);
        return toast.warn("email-already-in-use", {
            position: "bottom-right",
        });
    }
    if (errorCode === "auth/invalid-password") {
        setLoading(false);
        return toast.warn("invalid-password", {
            position: "bottom-right",
        });
    }

    setLoading(false);
    return toast.error("Something Went Wrong", {
        position: "bottom-right",
    });
};
