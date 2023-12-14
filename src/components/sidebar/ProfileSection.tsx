import { Avatar, Box, Text, Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { AppColors } from "../../utils/Colors";
import IconTextButton from "../IconTextButton";
import { IoMdLogOut } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";

interface profileSecInterface {
    closeDrawer: any;
}
function ProfileSection({ closeDrawer }: profileSecInterface) {
    const context = useContext(AppContext);
    const { user, setIsLogged, isLogged } = context || {};
    const navigate = useNavigate();

    const logoutFromApp = () => {
        signOut(auth)
            .then((_) => {
                setIsLogged(!isLogged);
                navigate("/auth");
            })
            .catch((_) => {
                console.log("Something went wrong");
            });
    };
    return (
        <Box
            height={"calc(100vh - 70px)"}
            w="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                // justifyContent="center"
                px={4}
                pt={5}
            >
                <Tooltip label="Click To Change Profile Pic">
                    <Link to="/updateprofile" onClick={closeDrawer}>
                        <Avatar
                            size="2xl"
                            cursor="pointer"
                            name="userProfilePic"
                            src={user ? user.profilePic : "/avator.jpg"}
                            borderWidth={3}
                            borderColor={AppColors.greenDark}
                            _hover={{ opacity: 0.5 }}
                        />
                    </Link>
                </Tooltip>

                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={4}
                    px={3}
                >
                    <Text mt={2}>{user ? user.name : "Username"} </Text>

                    <Link to="/updateprofile" onClick={closeDrawer}>
                        <MdEdit cursor="pointer" />
                    </Link>
                </Box>
                <InfoComp
                    text={user ? user.email : "{user}@gamil.com"}
                    icon={<MdOutlineMail />}
                />
                <InfoComp
                    text={user ? user.bio : "Hey i am using Chatapp"}
                    icon={<BsChatQuote />}
                />
            </Box>
            <IconTextButton
                text="Logout"
                onClick={logoutFromApp}
                icon={<IoMdLogOut />}
            />
        </Box>
    );
}

interface infoCompInterface {
    text: string;
    icon: any;
}
const InfoComp = ({ text, icon }: infoCompInterface) => (
    <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        px={3}
    >
        <Text mt={1}>{text} </Text>
        {icon}
    </Box>
);

export default ProfileSection;
