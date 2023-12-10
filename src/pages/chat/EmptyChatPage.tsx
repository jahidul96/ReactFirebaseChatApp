import { Box, Text } from "@chakra-ui/react";

function EmptyChatPage() {
    return (
        <Box
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Text fontSize={18} fontWeight="bold">
                Select a Chat To Start Chatting
            </Text>
        </Box>
    );
}

export default EmptyChatPage;
