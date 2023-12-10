import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import ChatProfileComp from "../chat_comp/ChatProfileComp";
import { AppColors } from "../../utils/Colors";

const usersChats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Sidebar = () => {
    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            position={"sticky"}
            top={0}
            left={0}
            display="flex"
            flexDirection="column"
        >
            {/* top profile section */}
            <Box
                bg={AppColors.graySilver}
                h={62}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Flex justifyContent="space-between" alignItems="center" px={4}>
                    <Link
                        to={"/"}
                        as={RouterLink}
                        _hover={{ textDecoration: "none" }}
                        pl={2}
                        cursor="pointer"
                    >
                        <Text fontWeight="bold" fontSize={17}>
                            ChatApp
                        </Text>
                    </Link>
                    <Link
                        to={"/profile"}
                        as={RouterLink}
                        mt={1}
                        cursor="pointer"
                    >
                        <Avatar
                            size="sm"
                            cursor="pointer"
                            name="Dan Abrahmov"
                            src="/avator.jpg"
                        />
                    </Link>
                </Flex>
            </Box>

            <Box flex={1} pt={3} overflowY={"auto"}>
                {usersChats.map((user: number) => (
                    <ChatProfileComp key={user} id={user} />
                ))}
            </Box>

            {/* logout button */}
            {/* <SideBarButton text="Logout" icon={<BiLogOut size={22} />} /> */}
        </Box>
    );
};

export default Sidebar;
