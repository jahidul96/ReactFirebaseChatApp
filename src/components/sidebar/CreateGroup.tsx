import { Box, Button, Input, Tooltip } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { FaArrowRight } from "react-icons/fa";

function CreateGroup() {
    return (
        <Box
            height={"calc(100vh - 70px)"}
            overflowY="auto"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            {/* group name */}
            <Box px={4} my={3}>
                <Input placeholder="Group Name" />
            </Box>
            {/* added contct */}
            <Box height={100} overflowY="auto"></Box>

            {/* contact list */}
            <Box flex={1} bg={"red"} overflowY="auto"></Box>

            {/* create button */}

            <Box
                mx={3}
                my={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Tooltip label="Create Group">
                    <Box
                        w={45}
                        h={45}
                        borderRadius={"50%"}
                        bg={AppColors.greenDark}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                    >
                        <FaArrowRight />
                    </Box>
                </Tooltip>
            </Box>
        </Box>
    );
}

export default CreateGroup;
