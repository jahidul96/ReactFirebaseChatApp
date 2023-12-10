import { Box, Text } from "@chakra-ui/react";
import { chatTextInterface } from "../../utils/interfaces/AppTypeInterfaces";
import { AppColors } from "../../utils/Colors";

interface chatInterface {
    chat: chatTextInterface;
}

function ChatText({ chat }: chatInterface) {
    return (
        <Box
            display="flex"
            justifyContent={chat.senderId == 1 ? "flex-end" : "flex-start"}
        >
            <Text
                minW={50}
                maxWidth={"70%"}
                bg={chat.senderId == 1 ? "transparent" : "#555"}
                mb={3}
                px={3}
                py={2}
                borderWidth={chat.senderId == 1 ? 1 : 0}
                borderColor={AppColors.graySilver}
                borderRadius={5}
                textAlign={chat.senderId == 1 ? "end" : "start"}
                fontSize={13}
                position="relative"
                pr={10}
            >
                {chat.text}
                <Text
                    textAlign="end"
                    fontSize={10}
                    mt={1}
                    position="absolute"
                    bottom={1}
                    right={3}
                >
                    1hr
                </Text>
            </Text>
        </Box>
    );
}

export default ChatText;
