import { Box, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function AppLoadingPage() {
    return (
        <Box
            h={"100vh"}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box>
                <Spinner size="xl" />
                <Text mt={2}>Loading...</Text>
            </Box>
        </Box>
    );
}

export default AppLoadingPage;
