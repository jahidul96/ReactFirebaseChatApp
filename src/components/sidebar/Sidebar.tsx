import { Avatar, Box, Flex } from "@chakra-ui/react";

import ChatProfileComp from "../chat_comp/ChatProfileComp";
import { AppColors } from "../../utils/Colors";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { FaArrowRight } from "react-icons/fa";
import ProfileSection from "./ProfileSection";
import { MdCancel } from "react-icons/md";

const usersChats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Sidebar = () => {
    const context = useContext(AppContext);
    const { user } = context || {};
    const [seeProfile, setSeeProfile] = useState(false);

    const changeToProfile = () => {
        setSeeProfile(!seeProfile);
    };

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
                h={70}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Flex justifyContent="space-between" alignItems="center" px={3}>
                    {seeProfile ? (
                        <Box></Box>
                    ) : (
                        <Avatar
                            onClick={changeToProfile}
                            size="md"
                            cursor="pointer"
                            name="userProfilePic"
                            src={user ? user.profilePic : "/avator.jpg"}
                            borderWidth={3}
                            borderColor={AppColors.greenDark}
                        />
                    )}
                    {/*  */}
                    <Box onClick={changeToProfile} mt={1} cursor="pointer">
                        {seeProfile ? (
                            <MdCancel size={25} color="#fff" />
                        ) : (
                            <FaArrowRight size={22} color="#fff" />
                        )}
                    </Box>
                </Flex>
            </Box>

            {/* profile or chats section */}
            {seeProfile ? (
                <ProfileSection />
            ) : (
                <Box flex={1} pt={3} overflowY={"auto"}>
                    {usersChats.map((user: number) => (
                        <ChatProfileComp key={user} id={user} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Sidebar;
