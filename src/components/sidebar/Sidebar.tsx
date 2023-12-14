import { Box, Button, Text } from "@chakra-ui/react";

import ChatProfileComp from "../chat_comp/ChatProfileComp";
import { AppColors } from "../../utils/Colors";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import ProfileSection from "./ProfileSection";
import { SidebarTopNav } from "./SideBarComp";
import SidebarDrawer from "./SidebarDrawer";
import CreateGroup from "./CreateGroup";

const usersChats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Sidebar = () => {
    const context = useContext(AppContext);
    const { user } = context || {};
    const [seeProfile, setSeeProfile] = useState(false);
    const [seeContacts, setSeeContacts] = useState(false);
    const [createGroup, setCreateGroup] = useState(false);

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
                minH={70}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <SidebarTopNav
                    changeToProfile={changeToProfile}
                    profilePic={user ? user.profilePic : "/avator.jpg"}
                    changeToContacts={() => setSeeContacts(!seeContacts)}
                    changeToCreateGroups={() => setCreateGroup(!createGroup)}
                />
            </Box>

            {/* chats */}
            <Box height={"calc(100vh - 70px)"} overflowY="auto">
                {usersChats.map((user: number) => (
                    <ChatProfileComp key={user} id={user} contact={false} />
                ))}
            </Box>

            {/* profile content */}
            <SidebarDrawer
                isOpen={seeProfile}
                text="Profile"
                closeDrawer={() => setSeeProfile(!seeProfile)}
            >
                <ProfileSection
                    closeDrawer={() => setSeeProfile(!seeProfile)}
                />
            </SidebarDrawer>

            {/* contacts content */}
            <SidebarDrawer
                isOpen={seeContacts}
                text="Contacts"
                closeDrawer={() => setSeeContacts(!seeContacts)}
            >
                {usersChats.map((user: number) => (
                    <ChatProfileComp key={user} id={user} contact={true} />
                ))}
            </SidebarDrawer>

            {/* create group drawer */}
            <SidebarDrawer
                isOpen={createGroup}
                text="Create Groups"
                closeDrawer={() => setCreateGroup(!createGroup)}
            >
                <CreateGroup />
            </SidebarDrawer>
        </Box>
    );
};

export default Sidebar;
