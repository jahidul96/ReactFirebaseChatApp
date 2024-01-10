import { Box, Text } from "@chakra-ui/react";
import { messageInterface } from "../../utils/interfaces/AppTypeInterfaces";
import { AppColors } from "../../utils/Colors";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import TimeAgo from "timeago-react";

interface chatInterface {
    chat: messageInterface;
    id: string;
    currentUserId: string;
}

function ChatText({ chat, currentUserId }: chatInterface) {
    return (
        <Box
            // this div for separating message into two side
            display="flex"
            justifyContent={
                chat.senderId == currentUserId ? "flex-end" : "flex-start"
            }
            mb={3}
        >
            {/* this div for auto-expandable div size */}
            <Box
                minW={55}
                maxWidth={"70%"}
                bg={
                    chat.senderId == currentUserId
                        ? AppColors.greenDark
                        : AppColors.graySilver
                }
                px={2}
                py={1}
                borderRadius={5}
                display="flex"
                flexDirection="column"
                // justifyContent={
                //     chat.senderDetails.uid == currentUserId ? "end" : "start"
                // }
            >
                <Text fontSize={13}>{chat.text}</Text>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <TimeAgo
                        style={{
                            fontSize: 9,
                            marginRight: 3,
                        }}
                        datetime={chat.createdAt ? chat.createdAt : ""}
                        locale="bd"
                    />
                    <IoCheckmarkDoneOutline size={16} />
                </Box>
            </Box>
        </Box>
    );
}

export default ChatText;
