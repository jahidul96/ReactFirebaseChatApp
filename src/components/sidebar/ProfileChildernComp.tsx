import { Avatar, Box, Text, Tooltip } from "@chakra-ui/react";

import { AppColors } from "../../utils/Colors";
import { MdEdit } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProfileInfoComp } from "../Reuseable";

interface profileChildernCompInterface {
    link: boolean;
    closeDrawer: any;
    children: any;
    profilePic?: string;
    name?: string;
    email?: string;
    bio?: string;
}
export default function ProfileChildernComp({
    bio,
    children,
    closeDrawer,
    email,
    link,
    name,
    profilePic,
}: profileChildernCompInterface) {
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
                <Tooltip label={link ? "Click To Change Profile Pic" : ""}>
                    <Link
                        to={link ? "/updateprofile" : ""}
                        onClick={link ? closeDrawer : () => {}}
                    >
                        <Avatar
                            size="2xl"
                            cursor={link ? "pointer" : "default"}
                            name="userProfilePic"
                            src={profilePic ? profilePic : "/avator.jpg"}
                            borderWidth={3}
                            borderColor={AppColors.greenDark}
                            _hover={{ opacity: link ? 0.5 : 1 }}
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
                    <Text mt={2}>{name ? name : "Username"} </Text>

                    <Link
                        to={link ? "/updateprofile" : ""}
                        onClick={link ? closeDrawer : () => {}}
                    >
                        <MdEdit cursor={link ? "pointer" : "default"} />
                    </Link>
                </Box>
                <ProfileInfoComp
                    text={email ? email : "{user}@gamil.com"}
                    icon={<MdOutlineMail />}
                />
                <ProfileInfoComp
                    text={bio ? bio : "Hey I am using Chatapp"}
                    icon={<BsChatQuote size={25} />}
                    textSize={13}
                />
            </Box>
            {children}
        </Box>
    );
}
