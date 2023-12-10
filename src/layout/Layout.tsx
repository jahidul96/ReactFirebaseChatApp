import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

interface layoutInterface {
    children: any;
}

const Layout = ({ children }: layoutInterface) => {
    const { pathname } = useLocation();

    const showSidebar = pathname == "/auth" ? false : true;
    return (
        <Flex>
            {/* sidebar/chat list */}
            {showSidebar ? (
                <Box w={"350px"}>
                    <Sidebar />
                </Box>
            ) : null}

            {/* chat content */}
            <Box w={"calc(100% - 350px)"} height="100vh">
                {children}
            </Box>
        </Flex>
    );
};

export default Layout;
