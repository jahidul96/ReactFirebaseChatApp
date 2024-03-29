import { Box, Text } from "@chakra-ui/react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { AppColors } from "../../utils/Colors";
import { FaArrowLeft } from "react-icons/fa";

interface sidebarDrawerInterface {
    isOpen: any;
    children: any;
    closeDrawer: any;
    headerTitle: string;
    direction?: boolean;
}

function SidebarDrawer({
    isOpen,
    children,
    closeDrawer,
    headerTitle,
    direction,
}: sidebarDrawerInterface) {
    return (
        <Drawer
            open={isOpen}
            direction={direction ? "right" : "left"}
            style={{
                width: direction ? "450px" : "350px",
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
                <Text>{headerTitle}</Text>
            </Box>
            {children}
        </Drawer>
    );
}

export default SidebarDrawer;
