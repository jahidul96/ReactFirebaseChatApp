import { Box, Text, Tooltip } from "@chakra-ui/react";
import { messageInterface } from "../../utils/interfaces/AppTypeInterfaces";
import { AppColors } from "../../utils/Colors";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface chatInterface {
    chat: messageInterface;
    id: string;
    currentUserId: string;
}

function ChatText({ chat, id, currentUserId }: chatInterface) {
    return (
        <Box
            display="flex"
            justifyContent={
                chat.senderDetails.uid == currentUserId
                    ? "flex-end"
                    : "flex-start"
            }
            mb={3}
        >
            <Text
                minW={55}
                maxWidth={"70%"}
                bg={
                    chat.senderDetails.uid == currentUserId
                        ? AppColors.greenDark
                        : AppColors.graySilver
                }
                px={2}
                py={1}
                borderRadius={5}
                textAlign={
                    chat.senderDetails.uid == currentUserId &&
                    chat.text.length < 3
                        ? "start"
                        : chat.senderDetails.uid == currentUserId
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
