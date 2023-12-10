import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ChatNav from "../../components/chat_comp/ChatNav";
import ChatFooter from "../../components/chat_comp/ChatFooter";
import { dummyChatTexts } from "../../data/dummyChatText";
import { chatTextInterface } from "../../utils/interfaces/AppTypeInterfaces";
import ChatText from "../../components/chat_comp/ChatText";

function ChatPage() {
    const { userId } = useParams();
    console.log(userId);
    return (
        <Box height={"100vh"} display="flex" flexDirection="column">
            {/* chatpage navbar */}
            <ChatNav />

            {/* chatpage text section */}
            <Box flex={1} overflowY="auto" px={3} py={4}>
                {dummyChatTexts.map((chat: chatTextInterface, i: number) => (
                    <ChatText key={i} chat={chat} />
                ))}
            </Box>

            {/* chat footer */}
            <ChatFooter />
        </Box>
    );
}

export default ChatPage;
