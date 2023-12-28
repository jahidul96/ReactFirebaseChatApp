import { Box } from "@chakra-ui/react";

import ChatProfileComp from "../chat_comp/ChatProfileComp";
import { AppColors } from "../../utils/Colors";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import ProfileSection from "./ProfileSection";
import { SidebarTopNav } from "./SideBarComp";
import SidebarDrawer from "./SidebarDrawer";
import {
    chatInterFace,
    userDataInterface,
} from "../../utils/interfaces/AppTypeInterfaces";
import EmptyInfoComp from "./EmptyInfoComp";

const Sidebar = () => {
    const context = useContext(AppContext);
    const { user, contacts, chats } = context || {};
    const [seeProfile, setSeeProfile] = useState(false);
    const [seeContacts, setSeeContacts] = useState(false);

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
                />
            </Box>

            {/* chats */}
            <Box height={"calc(100vh - 70px)"} overflowY="auto">
                {chats?.length == 0 ? (
                    <EmptyInfoComp text="No Chats Till Now! Go to Contatcs to new one!" />
                ) : (
                    chats?.map((chat: chatInterFace) => (
                        <ChatProfileComp
                            id={chat.chatInfos.uid}
                            user={chat.chatInfos}
                            contact={false}
                            lastMsg={chat.lastMsg}
                            lastMsgTime={chat.lastMsgAt}
                        />
                    ))
                )}
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
                {contacts?.length == 0
                    ? null
                    : contacts?.map((user: userDataInterface) => (
                          <ChatProfileComp
                              user={user}
                              id={user.uid}
                              contact={true}
                              closeDrawer={() => setSeeContacts(!seeContacts)}
                          />
                      ))}
            </SidebarDrawer>
        </Box>
    );
};

export default Sidebar;
