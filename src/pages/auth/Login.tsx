import {
    Box,
    Container,
    Button,
    Flex,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";

interface loginInterFace {
    onClick: any;
}
function Login({ onClick }: loginInterFace) {
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
                        Memory_Sharing_App
                    </Text>

                    {/* inputs/email/password/name/profile pic etc */}
                    <Stack spacing={5}>
                        <Input placeholder="Email" size="md" />
                        <Input placeholder="Password" size="md" />
                    </Stack>

                    <Button colorScheme="teal" variant="solid" w="100%" my={5}>
                        Login
                    </Button>

                    <Flex justifyContent="center">
                        <Text>Don't Have an Account ? </Text>
                        <Button ml={3} variant="link" onClick={onClick}>
                            SignUp!
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
