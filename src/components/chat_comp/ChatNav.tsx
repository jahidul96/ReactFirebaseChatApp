import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { IoSearch } from "react-icons/io5";
import { FaEllipsisVertical } from "react-icons/fa6";
import { userDataInterface } from "../../utils/interfaces/AppTypeInterfaces";

interface chatNavInterface {
    userDetails: userDataInterface;
    onClick: any;
}

function ChatNav({ userDetails, onClick }: chatNavInterface) {
    return (
        <Box h={63} bg={AppColors.graySilver} px={4}>
            <Flex justifyContent="space-between" alignItems="center" h="100%">
                {/* profile section */}
                <Flex alignItems="center" cursor="pointer" onClick={onClick}>
                    <Image
                        src={
                            userDetails
                                ? userDetails?.profilePic
                                : "/avator.jpg"
                        }
                        alt="profilePic.jpg"
                        w={35}
                        h={35}
                        borderRadius={35 / 2}
                    />
                    <Box ml={5}>
                        <Text fontSize={15}>{userDetails.name}</Text>
                        <Text fontSize={12}>Contact info</Text>
                    </Box>
                </Flex>

                {/* icon section */}
                <Flex>
                    <IoSearch size={20} cursor="pointer" />
                    <Box ml={8}>
                        <FaEllipsisVertical size={20} cursor="pointer" />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ChatNav;
