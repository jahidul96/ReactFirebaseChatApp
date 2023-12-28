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

    // console.log("this is userChatId or uid  ", userId);
    // console.log("chatType  ", isGroupChat);

    const sendText = () => {
        oneToOneChat(text, user, friendDetails);
        setText("");
        console.log("text sended and chat added");

        console.log("group chat");
    };

    useEffect(() => {
        // getting friend data
        getCurrentUser(userId ? userId : "").then((userData: any) => {
            setfriendDetails(userData);
        });

        // getting all messages
        getAllMessages(user?.uid, userId, setMessages);
    }, [userId]);

    // console.log("messages ", messages);
    return (
        <Box height={"100vh"} display="flex" flexDirection="column">
            {/* chatpage navbar */}
            <ChatNav userDetails={friendDetails} />

            {/* chatpage text section */}
            <Box flex={1} overflowY="auto" px={3} py={4}>
                {messages?.length == 0 ? (
                    <Text>No text</Text>
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
            </Box>

            {/* chat footer */}
            <ChatFooter value={text} setValue={setText} onClick={sendText} />
        </Box>
    );
}

export default ChatPage;
