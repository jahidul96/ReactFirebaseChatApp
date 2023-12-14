import { Avatar, Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link as RouterLink } from "react-router-dom";

const UpdateProfilePage = () => {
    const context = useContext(AppContext);
    const { user } = context || {};
    return (
        <Box>
            {/* Top profile navbar */}
            <Box
                height={70}
                w={"100%"}
                bg={AppColors.graySilver}
                display="flex"
                alignItems="center"
                px={8}
            >
                <Link
                    to={"/"}
                    // onClick={appSignOut}
                    as={RouterLink}
                    _hover={{ textDecoration: "none" }}
                    pl={2}
                    cursor="pointer"
                >
                    <FaArrowLeft size={22} />
                </Link>
                <Text ml={8} fontWeight="bold">
                    Profile
                </Text>
            </Box>
            <Container maxW={"container.md"}>
                <Box w={"100%"} h={"calc(100vh - 70px)"} mt={10}>
                    <Box display="flex" alignItems="center">
                        <Avatar
                            size="xl"
                            name="userProfilePic"
                            src={user ? user.profilePic : "/avator.jpg"}
                            borderWidth={3}
                            borderColor={AppColors.greenDark}
                        />

                        <Box ml={5} flex={1}>
                            <Text fontSize={18} fontWeight="700">
                                {user ? user.name : "Username"}{" "}
                            </Text>
                            <Text>
                                {user ? user.email : "{user}@gamil.com"}{" "}
                            </Text>
                        </Box>

                        <Button>Update</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default UpdateProfilePage;
