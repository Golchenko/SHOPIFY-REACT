import React from 'react'
import { Box, Image, Button, Text, Center } from '@chakra-ui/react'


function Hero() {
    return (
        <Box
            backgroundColor="#ffa8e2"
            position="relative"
            height="80vh"
            marginBottom="5rem"
        >
            <Image src="https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw93f4ac99/images/full/full_2021_/2021/full_2021_grand-canyon-7_2617_bu-bk_P5.png"
                height="100%"
                width="auto"
                objectFit="contain"
                margin="auto"
                objectPosition={["top", "center"]}
                paddingX="2rem"
            />
            <Text
                className="tracking-in-expand" 
                position="absolute"
                bottom="20%"
                width="100%"
                textAlign="center"
                color="white"
                fontWeight="bold"
                fontSize="4rem"
                paddingX="2rem"
            >
                Introducing Grand Canyon 2021
            </Text>
            <Center>
                <Button
                    w="10rem"
                    backgroundColor="#ff38bd"
                    color="white"
                    _hover={{ opacity: "80%" }}
                    position="absolute"
                    bottom="10%"
                >
                    Shop Now
                </Button>
            </Center>
        </Box>
    )
}

export default Hero
