import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function ChatPage() {
    const { userId } = useParams();
    console.log(userId);
    return (
        <Box minH="100vh" bg="red">
            <Text>This is chat page for user {userId}</Text>
        </Box>
    );
}

export default ChatPage;
