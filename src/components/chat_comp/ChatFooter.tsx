import { Box, Button, Flex, Image, Input, useToast } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { alertUserWithToast } from "../../util_Functions/Util_Functions";

interface chatFooterInterface {
    setValue: any;
    value: any;
    onClick: any;
}
function ChatFooter({ setValue, value, onClick }: chatFooterInterface) {
    const toastChakra = useToast();

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            // console.log("enter key pressed!!");
            onClick();
        }
    };
    return (
        <Box h={70} bg={AppColors.graySilver} px={4}>
            <Flex justifyContent="space-between" alignItems="center" h="100%">
                <Box
                    onClick={() =>
                        alertUserWithToast(
                            toastChakra,
                            "Storage Alert",
                            "Sorry storage is less in firebase so for now just using profie pic! otherwise it's broke down after 5/10 message!!."
                        )
                    }
                >
                    <Image
                        src="/gallery.jpg"
                        width={9}
                        height={9}
                        borderRadius={2}
                        mr={7}
                        cursor="pointer"
                    />
                </Box>
                <Input
                    placeholder="Type your message"
                    mr={3}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <Button colorScheme="teal" variant="solid" onClick={onClick}>
                    Send
                </Button>
            </Flex>
        </Box>
    );
}

export default ChatFooter;
