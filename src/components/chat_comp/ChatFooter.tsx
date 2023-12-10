import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";

function ChatFooter() {
    return (
        <Box h={63} bg={AppColors.graySilver} px={4}>
            <Flex justifyContent="space-between" alignItems="center" h="100%">
                <Input placeholder="Type your message" mr={3} />
                <Button colorScheme="teal" variant="solid">
                    Send
                </Button>
            </Flex>
        </Box>
    );
}

export default ChatFooter;
