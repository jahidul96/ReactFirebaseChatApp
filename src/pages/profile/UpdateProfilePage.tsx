import {
    Avatar,
    Box,
    Button,
    Container,
    Input,
    Link,
    Text,
} from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { FaArrowLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link as RouterLink } from "react-router-dom";

const UpdateProfilePage = () => {
    const context = useContext(AppContext);
    const { user } = context || {};
    const [updatedName, setUpdatedName] = useState(user?.name);
    const [updatedBio, setUpdatedBio] = useState(user?.bio);

    const updateInfo = (e: any) => {
        e.preventDefault();

        console.log("name", updatedName);
        console.log("bio", updatedBio);
    };
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
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Avatar
                            size="2xl"
                            name="userProfilePic"
                            src={user ? user.profilePic : "/avator.jpg"}
                            borderWidth={3}
                            borderColor={AppColors.greenDark}
                            _hover={{ opacity: 0.5 }}
                        />
                    </Box>
                    <Text my={3}>Name :</Text>
                    <Input
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                    />
                    <Text my={5}>Bio :</Text>
                    <Input
                        value={updatedBio}
                        mb={5}
                        mt={-2}
                        onChange={(e) => setUpdatedBio(e.target.value)}
                    />

                    <Button onClick={updateInfo}>Update</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default UpdateProfilePage;
