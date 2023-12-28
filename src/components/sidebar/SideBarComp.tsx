import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { MdMessage } from "react-icons/md";

interface sidebartopNavInterface {
    changeToProfile: any;
    changeToContacts: any;
    profilePic: string;
}
export const SidebarTopNav = ({
    changeToProfile,
    profilePic,
    changeToContacts,
}: sidebartopNavInterface) => {
    return (
        <Flex justifyContent="space-between" alignItems="center" px={3}>
            {/* profile pic section */}

            <Avatar
                onClick={changeToProfile}
                size="md"
                cursor="pointer"
                name="userProfilePic"
                src={profilePic}
                borderWidth={3}
                borderColor={AppColors.greenDark}
            />
            {/* right side button content */}
            <Tooltip label="New Chat">
                <Box mr={4} cursor="pointer" mt={1} onClick={changeToContacts}>
                    <MdMessage size={20} />
                </Box>
            </Tooltip>
        </Flex>
    );
};
