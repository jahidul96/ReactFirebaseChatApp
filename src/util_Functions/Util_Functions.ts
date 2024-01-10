// Scroll to bottom function
export const scrollToBottom = (scrollRef: any) => {
    if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
};

export const alertUserWithToast = (
    toastChakra: any,
    title: string,
    description: string
) => {
    return toastChakra({
        title: title,
        description: description,
        status: "success",
        duration: 5000,
        isClosable: true,
    });
};
