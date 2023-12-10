import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";

function ChatNav() {
    return (
        <Box h={63} bg={AppColors.graySilver} px={4}>
            <Flex justifyContent="space-between" alignItems="center" h="100%">
                <Flex alignItems="center" cursor="pointer">
                    <Image
                        src="/avator.jpg"
                        alt="profilePic.jpg"
                        w={35}
                        h={35}
                        borderRadius={35 / 2}
                    />
                    <Box ml={5}>
                        <Text fontSize={15}>Jahidul Islam</Text>
                        <Text fontSize={12}>Contact info</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default ChatNav;
