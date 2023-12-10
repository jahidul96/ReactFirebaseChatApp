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
            {/* sidebar on the left */}
            {showSidebar ? (
                <Box w={"300px"}>
                    <Sidebar />
                </Box>
            ) : null}

            {/* the page content on the right */}
            <Box flex={1} w={"calc(100% - 300px)"} mx={"auto"}>
                {children}
            </Box>
        </Flex>
    );
};

export default Layout;
