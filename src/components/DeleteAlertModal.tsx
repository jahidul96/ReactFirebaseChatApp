import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react";

interface deleteAlertModalInterface {
    cancelRef: any;
    onClose: any;
    isOpen: any;
    headerText: string;
    alertText: string;
    onClickYes: any;
}
function DeleteAlertModal({
    cancelRef,
    isOpen,
    onClose,
    headerText,
    alertText,
    onClickYes,
}: deleteAlertModalInterface) {
    return (
        <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>{headerText}</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>{alertText}</AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        No
                    </Button>
                    <Button colorScheme="red" ml={3} onClick={onClickYes}>
                        Yes
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default DeleteAlertModal;
