import { Box, Button, Flex, Tooltip } from "@chakra-ui/react";
import { AppColors } from "../utils/Colors";

interface sidebarbtnInterface {
    text: string;
    icon: any;
    onClick: any;
}
function IconTextButton({ text, icon, onClick }: sidebarbtnInterface) {
    return (
        <Box
            onClick={onClick}
            cursor="pointer"
            pb={3}
            px={3}
            bg={AppColors.graySilver}
        >
            <Tooltip
                hasArrow
                label={text}
                placement="right"
                ml={1}
                openDelay={500}
            >
                <Flex
                    // onClick={handleLogout}
                    alignItems={"center"}
                    // gap={1}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={4}
                    cursor="pointer"
                    px={2}
                    w={"100%"}
                    mt={3}
                >
                    {icon}
                    <Button
                        variant={"ghost"}
                        _hover={{ bg: "transparent" }}
                        fontSize={16}
                        // isLoading={isLoggingOut}
                    >
                        {text}
                    </Button>
                </Flex>
            </Tooltip>
        </Box>
    );
}

export default IconTextButton;
