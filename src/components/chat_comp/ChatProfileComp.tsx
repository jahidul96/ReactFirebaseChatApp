import { Box, Flex, Image, Link, Text, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AppColors } from "../../utils/Colors";
import { FaChevronDown } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface chatprofilecompInterface {
    id: number;
}
function ChatProfileComp({ id }: chatprofilecompInterface) {
    return (
        <Tooltip label={"Last msg"} fontSize="smaller">
            <Flex
                cursor="pointer"
                py={4}
                px={3}
                _hover={{ bg: AppColors.ashGray }}
                alignItems="center"
            >
                <Link
                    to={`/chat/${id}`}
                    _hover={{ textDecoration: "none" }}
                    as={RouterLink}
                    cursor="pointer"
                    flex={1}
                >
                    <Flex>
                        {/* profile pic */}
                        <Image
                            src="/avator.jpg"
                            w={41}
                            h={41}
                            borderRadius={20}
                        />

                        {/* name and last msg */}
                        <Box flex={1} ml={3}>
                            <Text fontSize={14} fontWeight="bold">
                                Jahidul Islam
                            </Text>
                            <Flex alignItems="center">
                                <IoCheckmarkDoneOutline size={16} />
                                <Text fontSize={12} ml={1}>
                                    last msg
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Link>

                {/* time and delete features */}
                <Box onClick={() => alert(123)}>
                    <Text fontSize={12} mb={1}>
                        1hr
                    </Text>
                    <FaChevronDown size={13} />
                </Box>
            </Flex>
        </Tooltip>
    );
}

export default ChatProfileComp;
