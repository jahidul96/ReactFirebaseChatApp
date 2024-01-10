import {
    Avatar,
    Box,
    Button,
    Container,
    Input,
    Link,
    Text,
    Tooltip,
    useToast,
} from "@chakra-ui/react";
import { AppColors } from "../../utils/Colors";
import { FaArrowLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addUserToFB } from "../../firebase/Fb_Firestore";
import { userDataInterface } from "../../utils/interfaces/AppTypeInterfaces";

const UpdateProfilePage = () => {
    const context = useContext(AppContext);
    const { user, setUser } = context || {};
    const [updatedName, setUpdatedName] = useState(user?.name);
    const [updatedBio, setUpdatedBio] = useState(user?.bio);
    const navigate = useNavigate();
    const toastChakra = useToast();

    const updateInfo = (e: any) => {
        e.preventDefault();

        if (user) {
            if (user.name.length < 5 && user.bio.length < 6) {
                return toast.warn("Name or Bio length is too short!!", {
                    position: "bottom-right",
                });
            }

            if (user.name == updatedName && user.bio == updatedBio) {
                return toast.warn("Same Input as Before!", {
                    position: "bottom-right",
                });
            }

            const updatedUserData = {
                name: updatedName,
                bio: updatedBio,
                updatedAt: Date.now(),
            };

            addUserToFB(updatedUserData, user.uid)
                .then((_) => {
                    // navigate(0);
                    const updatedData: userDataInterface = {
                        bio: updatedBio ? updatedBio : user.bio,
                        createdAt: user.createdAt,
                        email: user.email,
                        name: updatedName ? updatedName : user.name,
                        profilePic: user.profilePic,
                        uid: user.uid,
                        updatedAt: Date.now(),
                    };

                    setUser(updatedData);
                    toastChakra({
                        title: "Updated Alert",
                        description: "you've Updated your account Info.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    navigate("/");
                })
                .catch((_) => {
                    // navigate("/");
                    return toast.warn("Update Failed!!", {
                        position: "bottom-right",
                    });
                });
        } else {
            toastChakra({
                title: "SignIn Alert",
                description: "Something went wrong in fethich user!!",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
        }
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
                        <Tooltip label="Firebase free storage is less so just avoid changing this one for now!!! but you can change bio and name!">
                            <Avatar
                                size="2xl"
                                name="userProfilePic"
                                src={user ? user.profilePic : "/avator.jpg"}
                                borderWidth={3}
                                borderColor={AppColors.greenDark}
                                _hover={{ opacity: 0.5 }}
                            />
                        </Tooltip>
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
                <ToastContainer />
            </Container>
        </Box>
    );
};

export default UpdateProfilePage;
