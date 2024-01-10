import {
    Box,
    Flex,
    Image,
    Link,
    Text,
    Tooltip,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppColors } from "../../utils/Colors";
import { FaChevronDown } from "react-icons/fa6";
import { userDataInterface } from "../../utils/interfaces/AppTypeInterfaces";
import TimeAgo from "timeago-react";
import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { deleteOneChat, updateSeenStatus } from "../../firebase/Fb_Firestore";
import DeleteAlertModal from "../DeleteAlertModal";
import { alertUserWithToast } from "../../util_Functions/Util_Functions";

interface chatprofilecompInterface {
    id: string;
    contact: boolean;
    closeDrawer?: any;
    chatUser: userDataInterface;
    lastMsg?: string;
    senderId?: string;
    lastMsgTime?: number;
    seen?: boolean;
}
function ChatProfileComp({
    id,
    contact,
    closeDrawer,
    chatUser,
    lastMsg,
    lastMsgTime,
    seen,
    senderId,
}: chatprofilecompInterface) {
    const context = useContext(AppContext);
    const { user } = context || {};
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    const navigate = useNavigate();
    const toastChakra = useToast();

    const changeSeenStatus = () => {
        if (seen) {
            console.log("this msg from me");
        } else {
            updateSeenStatus(user ? user?.uid : "", chatUser.uid);
            console.log("seen status updated");
        }
    };

    // deleteThisChat
    const deleteThisChat = () => {
        if (id) {
            deleteOneChat(user?.uid, id);
            onClose();
            navigate("/");
            alertUserWithToast(
                toastChakra,
                "Deleted alert",
                "This chat deleted succesfully!"
            );
        } else {
            return;
        }
    };
    return (
        <Flex
            cursor="pointer"
            py={4}
            px={3}
            _hover={{ bg: AppColors.ashGray }}
            alignItems="center"
        >
            <Tooltip label={lastMsg} fontSize="smaller">
                <Link
                    to={`/chat/${id}`}
                    onClick={closeDrawer}
                    _hover={{ textDecoration: "none" }}
                    as={RouterLink}
                    cursor="pointer"
                    flex={1}
                >
                    <Flex
                        alignItems={contact ? "center" : ""}
                        onClick={changeSeenStatus}
                    >
                        {/* profile pic */}
                        <Image
                            src={chatUser ? chatUser.profilePic : "/avator.jpg"}
                            w={41}
                            h={41}
                            borderRadius={20}
                        />

                        {/* name and last msg */}
                        <Box flex={1} ml={3}>
                            <Flex>
                                <Text fontSize={14} fontWeight="bold">
                                    {chatUser ? chatUser.name : "Name"}
                                </Text>
                                {seen ? null : (
                                    <Box
                                        w={4}
                                        h={4}
                                        borderRadius={10}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        bg="red"
                                        ml={2}
                                    >
                                        <Text fontSize={9}>1</Text>
                                    </Box>
                                )}
                            </Flex>

                            {contact ? null : (
                                <Flex alignItems="center">
                                    <Text fontSize={11}>
                                        {senderId == user?.uid
                                            ? "You : "
                                            : "Friend : "}
                                    </Text>
                                    <Text fontSize={12} ml={1}>
                                        {lastMsg
                                            ? lastMsg?.length > 24
                                                ? lastMsg?.slice(0, 24) + "..."
                                                : lastMsg
                                            : " "}
                                    </Text>
                                </Flex>
                            )}
                        </Box>
                    </Flex>
                </Link>
            </Tooltip>

            {/* time and delete features */}
            {contact ? null : (
                <Tooltip label="Click To delete Chat!">
                    <Box
                        onClick={onOpen}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                    >
                        <DeleteAlertModal
                            cancelRef={cancelRef}
                            isOpen={isOpen}
                            onClose={onClose}
                            headerText="Delete Chat"
                            alertText="Are You Sure You Want to Delete This Whole Chat History ?"
                            onClickYes={deleteThisChat}
                        />
                        <TimeAgo
                            style={{
                                fontSize: 10,
                            }}
                            datetime={lastMsgTime ? lastMsgTime : ""}
                            locale="bd"
                        />

                        <Box mt={1}>
                            <FaChevronDown size={13} />
                        </Box>
                    </Box>
                </Tooltip>
            )}
        </Flex>
    );
}

export default ChatProfileComp;
