import { Box, Text } from "@chakra-ui/react";

interface ProfileInfoCompInterface {
    text: string;
    icon: any;
    textSize?: number;
}
export const ProfileInfoComp = ({
    text,
    icon,
    textSize,
}: ProfileInfoCompInterface) => (
    <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        px={3}
    >
        <Text mt={1} pr={3} fontSize={textSize ? textSize : 16}>
            {text}
        </Text>
        {icon}
    </Box>
);
