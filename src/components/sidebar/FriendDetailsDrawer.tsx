import Drawer from "react-modern-drawer";
import { AppColors } from "../../utils/Colors";
import { Box, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

interface sidebarDrawerInterface {
    isOpen: any;
    children: any;
    closeDrawer: any;
    text: string;
}
export default function FriendDetailsDrawer({
    children,
    closeDrawer,
    isOpen,
    text,
}: sidebarDrawerInterface) {
    return (
        <Drawer
            open={isOpen}
            direction="left"
            style={{
                width: "350px",
                backgroundColor: AppColors.graySilver,
                height: "100vh",
                overflowY: "auto",
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                height={70}
                px={4}
                borderColor={AppColors.ashGray}
                borderBottomWidth={1}
            >
                <Box cursor="pointer" mr={5} onClick={closeDrawer}>
                    <FaArrowLeft size={22} />
                </Box>
                <Text>{text}</Text>
            </Box>
            {children}
        </Drawer>
    );
}
