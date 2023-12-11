import {
    Box,
    Container,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { signinWithFb } from "../../firebase/Fb_Auth";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";

interface loginInterFace {
    onClick: any;
}
function Login({ onClick }: loginInterFace) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const context = useContext(AppContext);
    const { setIsLogged } = context || {};

    const loginUser = (e: any) => {
        e.preventDefault();

        setLoading(true);
        if (!email || !password) {
            setLoading(false);
            return toast.warn("All Fields required!", {
                position: "bottom-right",
            });
        }

        signinWithFb(email, password)
            .then((_) => {
                setLoading(false);
                setIsLogged(true);
            })
            .catch((_) => {
                setLoading(false);
                return toast.warn("Something Went Wrong!", {
                    position: "bottom-right",
                });
            });
        setLoading(false);
    };

    return (
        <Container maxW={"container.md"} h={"100vh"}>
            <Box
                display={"flex"}
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    w={300}
                    h={350}
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
                            placeholder="Email"
                            size="md"
                            onChange={(e) => setEmail(e.target?.value)}
                        />
                        <Input
                            placeholder="Password"
                            size="md"
                            onChange={(e) => setPassword(e.target?.value)}
                        />
                    </Stack>

                    <Button
                        colorScheme="teal"
                        variant="solid"
                        w="100%"
                        my={5}
                        disabled={loading}
                        onClick={loginUser}
                    >
                        {loading ? <Spinner /> : "Login"}
                    </Button>

                    <Flex justifyContent="center">
                        <Text>Don't Have an Account ? </Text>
                        <Button ml={3} variant="link" onClick={onClick}>
                            SignUp!
                        </Button>
                    </Flex>

                    <ToastContainer />
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
