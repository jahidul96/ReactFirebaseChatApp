import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";

function ChatFooter() {
    return (
        <Box h={70} bg={AppColors.graySilver} px={4}>
            <Flex justifyContent="space-between" alignItems="center" h="100%">
                <>
                    <label htmlFor="imageInput" className="gallery_icon">
                        <img src="/gallery.jpg" alt="gallery" />
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        className="imageInput"
                        id="imageInput"
                    />
                </>
                <Input placeholder="Type your message" mr={3} />
                <Button colorScheme="teal" variant="solid">
                    Send
                </Button>
            </Flex>
        </Box>
    );
}

export default ChatFooter;
