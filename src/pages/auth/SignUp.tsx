import {
    Box,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Container,
} from "@chakra-ui/react";
interface signupInterFace {
    onClick: any;
}
const SignUp = ({ onClick }: signupInterFace) => {
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
                        Memory_Sharing_App
                    </Text>

                    {/* inputs/email/password/name/profile pic etc */}
                    <Stack spacing={5}>
                        <Input placeholder="Name" size="md" />
                        <Input placeholder="Email" size="md" />
                        <Input placeholder="Password" size="md" />

                        <Flex alignItems="center">
                            <>
                                <label htmlFor="imageInput" className="avatar">
                                    <img src="/avator.jpg" alt="Avatar" />
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="imageInput"
                                />
                            </>

                            <Text ml={4}>Add a Profile Picture</Text>
                        </Flex>
                    </Stack>

                    <Button colorScheme="teal" variant="solid" w="100%" my={5}>
                        SignUp
                    </Button>

                    <Flex justifyContent="center">
                        <Text>Already Have an Account ? </Text>
                        <Button ml={3} variant="link" onClick={onClick}>
                            SignUp!
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
