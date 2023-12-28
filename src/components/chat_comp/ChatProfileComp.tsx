import { Box, Flex, Image, Link, Text, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AppColors } from "../../utils/Colors";
import { FaChevronDown } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { userDataInterface } from "../../utils/interfaces/AppTypeInterfaces";
import TimeAgo from "timeago-react";

interface chatprofilecompInterface {
    id: string;
    contact: boolean;
    closeDrawer?: any;
    user: userDataInterface;
    lastMsg?: string;
    lastMsgTime?: Date;
}
function ChatProfileComp({
    id,
    contact,
    closeDrawer,
    user,
    lastMsg,
    lastMsgTime,
}: chatprofilecompInterface) {
    return (
        <Tooltip label={lastMsg} fontSize="smaller">
            <Flex
                cursor="pointer"
                py={4}
                px={3}
                _hover={{ bg: AppColors.ashGray }}
                alignItems="center"
            >
                <Link
                    to={`/chat/${id}`}
                    onClick={closeDrawer}
                    _hover={{ textDecoration: "none" }}
                    as={RouterLink}
                    cursor="pointer"
                    flex={1}
                >
                    <Flex alignItems={contact ? "center" : ""}>
                        {/* profile pic */}
                        <Image
                            src={user ? user.profilePic : "/avator.jpg"}
                            w={41}
                            h={41}
                            borderRadius={20}
                        />

                        {/* name and last msg */}
                        <Box flex={1} ml={3}>
                            <Text fontSize={14} fontWeight="bold">
                                {user ? user.name : "Name"}
                            </Text>

                            {contact ? null : (
                                <Flex alignItems="center">
                                    <IoCheckmarkDoneOutline size={16} />
                                    <Text fontSize={12} ml={1}>
                                        {lastMsg
                                            ? lastMsg?.length > 24
                                                ? lastMsg?.slice(0, 24) + "..."
                                                : lastMsg
                                            : " "}
                                    </Text>
                                </Flex>
                            )}
                        </Box>
                    </Flex>
                </Link>

                {/* time and delete features */}
                {contact ? null : (
                    <Box
                        onClick={() => alert(123)}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                    >
                        <TimeAgo
                            style={{
                                fontSize: 10,
                            }}
                            datetime={lastMsgTime ? lastMsgTime : ""}
                            locale="bd"
                        />

                        <FaChevronDown size={13} />
                    </Box>
                )}
            </Flex>
        </Tooltip>
    );
}

export default ChatProfileComp;
