import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { MdCancel, MdMessage, MdGroups } from "react-icons/md";

interface sidebartopNavInterface {
    changeToProfile: any;
    changeToContacts: any;
    changeToCreateGroups: any;
    profilePic: string;
}
export const SidebarTopNav = ({
    changeToProfile,
    profilePic,
    changeToContacts,
    changeToCreateGroups,
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
            <Flex alignItems="center">
                <Tooltip label="New Chat">
                    <Box
                        mr={4}
                        cursor="pointer"
                        mt={1}
                        onClick={changeToContacts}
                    >
                        <MdMessage size={20} />
                    </Box>
                </Tooltip>
                <Tooltip label="Create Group">
                    <Box mr={4} cursor="pointer" onClick={changeToCreateGroups}>
                        <MdGroups size={25} />
                    </Box>
                </Tooltip>
            </Flex>
        </Flex>
    );
};
