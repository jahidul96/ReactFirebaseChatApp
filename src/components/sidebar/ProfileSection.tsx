import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { AppColors } from "../../utils/Colors";
import IconTextButton from "../IconTextButton";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
function ProfileSection() {
    const context = useContext(AppContext);
    const { user } = context || {};
    return (
        <Box
            flex={1}
            pt={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box
                flex={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
                // justifyContent="center"
                px={4}
            >
                <Avatar
                    size="xl"
                    cursor="pointer"
                    name="userProfilePic"
                    src={user ? user.profilePic : "/avator.jpg"}
                    borderWidth={3}
                    borderColor={AppColors.greenDark}
                />
                <Text fontSize={18} fontWeight="700" mt={2}>
                    {user ? user.name : "Username"}{" "}
                </Text>
                <Text mt={1}>{user ? user.email : "{user}@gamil.com"} </Text>
                <Link to="/updateprofile">
                    <Button mt={2}>Update</Button>
                </Link>
            </Box>
            <IconTextButton
                text="Logout"
                onClick={() => {}}
                icon={<IoMdLogOut />}
            />
        </Box>
    );
}

export default ProfileSection;
