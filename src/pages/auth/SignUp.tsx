import {
    Box,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Container,
    Spinner,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from "react";
import ImagePickingWithPrev from "../../components/ImagePickingWithPreview";
import { ToastContainer, toast } from "react-toastify";
import { uploadFileToStorage } from "../../firebase/Fb_Storage";
import { fbUserRegister } from "../../firebase/Fb_Auth";
import { addUserToFB } from "../../firebase/Fb_Firestore";
import { AppContext } from "../../context/AppContextProvider";

interface signupInterFace {
    onClick: any;
}

const SignUp = ({ onClick }: signupInterFace) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const context = useContext(AppContext);
    const { setIsLogged } = context || {};

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageUrl(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const signUpUser = (e: any) => {
        e.preventDefault();

        setLoading(true);
        if (!name || !email || !password || !imageUrl) {
            setLoading(false);
            return toast.warn("All Fields required!", {
                position: "bottom-right",
            });
        }

        const userData = {
            name,
            email,
            profilePic: "",
            createdAt: Date.now(),
            updatedAt: Date.now(),
            bio: "I am using ChatApp",
            uid: "",
        };

        if (imageFile) {
            uploadFileToStorage(imageFile)
                .then((url: any) => {
                    fbUserRegister(email, password).then((uid: any) => {
                        userData.uid = uid;
                        userData.profilePic = url;
                        addUserToFB(userData, uid);
                        setLoading(false);
                        setIsLogged(true);

                        return toast.success("Profile Created Succesfully!", {
                            position: "bottom-right",
                        });
                    });
                })
                .catch((_) => {
                    setLoading(false);
                    return toast.warn("Profile Pic uploading Problem!", {
                        position: "bottom-right",
                    });
                });
        } else {
            setLoading(false);
            return toast.warn("Add a profile pic it's a must!", {
                position: "bottom-right",
            });
        }
    };

    return (
        <Box
            display={"flex"}
            width="100%"
            height="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                w={300}
                h={450}
                borderColor={"gray.50"}
                borderWidth={1}
                borderRadius={10}
                px={4}
                py={8}
            >
                {/* App logo/name */}
                <Text
                    textAlign="center"
                    fontSize={20}
                    fontWeight="bold"
                    textDecoration="underline"
                    mb={5}
                >
                    ChatApp
                </Text>

                {/* inputs/email/password/name/profile pic etc */}
                <Stack spacing={5}>
                    <Input
                        placeholder="Name"
                        size="md"
                        onChange={(e) => setName(e.target?.value)}
                    />
                    <Input
                        placeholder="Email"
                        size="md"
                        onChange={(e) => setEmail(e.target?.value)}
                    />
                    <Input
                        placeholder="Password"
                        size="md"
                        onChange={(e) => setPassword(e.target?.value)}
                    />

                    {/* profile pic take */}
                    <ImagePickingWithPrev
                        imageUrl={imageUrl}
                        handleImageChange={handleImageChange}
                    />
                </Stack>

                <Button
                    colorScheme="teal"
                    variant="solid"
                    w="100%"
                    my={5}
                    onClick={signUpUser}
                    disabled={loading}
                >
                    {loading ? <Spinner /> : "SignUp"}
                </Button>

                <Flex justifyContent="center">
                    <Text>Already Have an Account ? </Text>
                    <Button ml={3} variant="link" onClick={onClick}>
                        SignUp!
                    </Button>
                </Flex>

                {/* toast message  */}
                <ToastContainer />
            </Box>
        </Box>
    );
};

export default SignUp;
