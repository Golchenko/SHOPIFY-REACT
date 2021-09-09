import React from 'react'
import { Box, Flex, Button, Image, Heading, Text } from '@chakra-ui/react'

const ImageWithText = ({ reverse, image, heading, text }) => {

    const reversSection = reverse ? 'row-reverse' : 'row'

    return (
        <Box>
            <Flex
                flexDirection={['column', reversSection]}
                width="100%"
                position="relative"
                >
                <Image src={image} objectFit="cover" width={["100%", "50%"]} />
                <Flex
                    width={["100%", "50%"]}
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    padding="2rem">
                    <Heading paddingBottom="2rem">
                        {heading && heading}
                    </Heading>
                    <Text paddingBottom="2rem">
                        {text && text}
                    </Text>
                    <Button
                        w="10rem"
                        backgroundColor="#ff38bd"
                        color="white"
                        _hover={{ opacity: "80%" }}
                        position="absolute"
                        bottom="10%"
                    >
                        Buy Now
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ImageWithText
