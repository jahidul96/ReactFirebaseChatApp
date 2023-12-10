import { Box, Text, Tooltip } from "@chakra-ui/react";
import { chatTextInterface } from "../../utils/interfaces/AppTypeInterfaces";
import { AppColors } from "../../utils/Colors";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface chatInterface {
    chat: chatTextInterface;
}

function ChatText({ chat }: chatInterface) {
    return (
        <Box
            display="flex"
            justifyContent={chat.senderId == 1 ? "flex-end" : "flex-start"}
            mb={3}
        >
            <Text
                minW={55}
                maxWidth={"70%"}
                bg={
                    chat.senderId == 1
                        ? AppColors.greenDark
                        : AppColors.graySilver
                }
                px={2}
                py={1}
                borderRadius={5}
                textAlign={
                    chat.senderId == 1 && chat.text.length < 3
                        ? "start"
                        : chat.senderId == 1
                        ? "end"
                        : "start"
                }
                fontSize={13}
            >
                {chat.text}
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Text fontSize={10} mr={1}>
                        1hr ago
                    </Text>
                    <IoCheckmarkDoneOutline size={16} />
                </Box>
            </Text>
        </Box>
    );
}

export default ChatText;
