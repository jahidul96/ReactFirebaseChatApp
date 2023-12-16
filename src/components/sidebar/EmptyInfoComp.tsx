import { Box, Text } from "@chakra-ui/react";

interface infoInterface {
    text: string;
}

function EmptyInfoComp({ text }: infoInterface) {
    return (
        <Box
            height={"calc(100vh - 70px)"}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Text px={5}>{text}</Text>
        </Box>
    );
}

export default EmptyInfoComp;
