import { Box, Flex, Text } from "@chakra-ui/react";

interface imagePickingInterface {
    imageUrl: string;
    handleImageChange: any;
}

function ImagePickingWithPrev({
    handleImageChange,
    imageUrl,
}: imagePickingInterface) {
    return (
        <Flex alignItems="center">
            <Box width={50} height={50}>
                <label htmlFor="imageInput" className="avatar">
                    {imageUrl ? (
                        <img src={imageUrl} alt="Preview" className="avatar" />
                    ) : (
                        <img
                            src="/avator.jpg"
                            alt="Avatar"
                            className="avatar"
                        />
                    )}
                </label>

                <input
                    type="file"
                    accept="image/*"
                    className="imageInput"
                    id="imageInput"
                    onChange={handleImageChange}
                />
            </Box>

            <Text ml={4}>
                {imageUrl ? "Click to change" : "Add a Profile Picture"}
            </Text>
        </Flex>
    );
}

export default ImagePickingWithPrev;
