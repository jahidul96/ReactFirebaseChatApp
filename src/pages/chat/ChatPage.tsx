import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ChatNav from "../../components/chat_comp/ChatNav";
import ChatFooter from "../../components/chat_comp/ChatFooter";
import {
    messageInterfaceWithDocId,
    userDataInterface,
} from "../../utils/interfaces/AppTypeInterfaces";
import { useContext, useEffect, useRef, useState } from "react";
import {
    getAllMessages,
    getCurrentUser,
    oneToOneChat,
} from "../../firebase/Fb_Firestore";
import { AppContext } from "../../context/AppContextProvider";
import ChatText from "../../components/chat_comp/ChatText";
import { scrollToBottom } from "../../util_Functions/Util_Functions";
import SidebarDrawer from "../../components/sidebar/SidebarDrawer";
import ProfileChildernComp from "../../components/sidebar/ProfileChildernComp";

function ChatPage() {
    const { userId } = useParams();
    const context = useContext(AppContext);
    const { user } = context || {};
    const [text, setText] = useState("");
    const scrollRef = useRef(null);
    const [messages, setMessages] = useState<messageInterfaceWithDocId[] | []>(
        []
    );
    const [friendDetails, setfriendDetails] = useState<userDataInterface | {}>(
        {}
    );
    const [seeProfile, setSeeProfile] = useState(false);

    // send text
    const sendText = () => {
        if (user) {
            if (text == "") {
                console.log("text is empty!!!");
                return;
            }
            oneToOneChat(text, user, friendDetails);
            setText("");
        }
    };

    // getting data
    useEffect(() => {
        // getting friend data
        getCurrentUser(userId ? userId : "").then((userData: any) => {
            setfriendDetails(userData);
        });

        // getting all messages
        if (user && userId) {
            getAllMessages(user?.uid, userId, setMessages);
        }
    }, [userId]);

    // scrolling auto
    useEffect(() => {
        // Scroll to bottom when messages change
        scrollToBottom(scrollRef);
    }, [messages]);

    return (
        <Box height={"100vh"} display="flex" flexDirection="column">
            {/* chatpage navbar */}
            <ChatNav
                userDetails={friendDetails}
                onClick={() => setSeeProfile(!seeProfile)}
            />

            {/* chatpage text section */}
            <Box flex={1} overflowY="auto" px={3} py={4}>
                {messages?.length === 0 ? (
                    <Text textAlign="center">
                        No text Yet! Send a text to start the conversation!
                    </Text>
                ) : (
                    messages.map((message: messageInterfaceWithDocId) => (
                        <ChatText
                            chat={message.messageDetails}
                            key={message.docId}
                            id={message.docId}
                            currentUserId={user ? user.uid : ""}
                        />
                    ))
                )}
                <div ref={scrollRef} />
            </Box>

            {/* chat footer */}
            <ChatFooter value={text} setValue={setText} onClick={sendText} />

            {/* friendDetails drawer */}
            <SidebarDrawer
                isOpen={seeProfile}
                headerTitle={`${friendDetails?.name} Details`}
                closeDrawer={() => setSeeProfile(!seeProfile)}
                direction
            >
                <ProfileChildernComp
                    children={<></>}
                    bio={friendDetails.bio}
                    name={friendDetails.name}
                    email={friendDetails.email}
                    closeDrawer={() => setSeeProfile(!seeProfile)}
                    link={false}
                    profilePic={friendDetails.profilePic}
                />
            </SidebarDrawer>
        </Box>
    );
}

export default ChatPage;
