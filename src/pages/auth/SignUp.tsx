import {
    Box,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Container,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import ImagePickingWithPrev from "../../components/ImagePickingWithPreview";
interface signupInterFace {
    onClick: any;
}
const SignUp = ({ onClick }: signupInterFace) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageUrl(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    // const handleImageUpload = () => {
    //     if (imageFile) {
    //       const storageRef = firebase.storage().ref();
    //       const imageRef = storageRef.child(`images/${imageFile.name}`);

    //       imageRef.put(imageFile)
    //         .then((snapshot) => {
    //           // Image uploaded successfully, get the download URL
    //           snapshot.ref.getDownloadURL().then((downloadURL) => {
    //             // Use this URL to display the image or perform other operations
    //             console.log('File available at', downloadURL);
    //             // You can also set this URL in state to display the uploaded image
    //           });
    //         })
    //         .catch((error) => {
    //           // Handle any errors that occurred during the upload
    //           console.error('Error uploading file: ', error);
    //         });
    //     }
    //   };
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
                    <Input placeholder="Name" size="md" />
                    <Input placeholder="Email" size="md" />
                    <Input placeholder="Password" size="md" />

                    {/* profile pic take */}
                    <ImagePickingWithPrev
                        imageUrl={imageUrl}
                        handleImageChange={handleImageChange}
                    />
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
    );
};

export default SignUp;
