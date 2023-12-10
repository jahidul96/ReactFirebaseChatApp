import { Box, Flex, Image, Link, Text, textDecoration } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface chatprofilecompInterface {
    id: number;
}
function ChatProfileComp({ id }: chatprofilecompInterface) {
    return (
        <Box cursor="pointer" py={4} px={3} _hover={{ bg: "#555" }}>
            <Link
                to={`/chat/${id}`}
                _hover={{ textDecoration: "none" }}
                as={RouterLink}
                cursor="pointer"
            >
                <Flex>
                    <Image src="/avator.jpg" w={41} h={41} borderRadius={20} />
                    <Box flex={1} ml={3}>
                        <Text fontSize={14} fontWeight="bold">
                            Jahidul Islam
                        </Text>
                        <Text fontSize={12}>last msg</Text>
                    </Box>

                    <Box>
                        <Text fontSize={12}>1hr</Text>
                    </Box>
                </Flex>
            </Link>
        </Box>
    );
}

export default ChatProfileComp;
