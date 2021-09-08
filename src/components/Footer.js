import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Image, VStack, Text } from '@chakra-ui/react'

function Footer() {
    return (
        <Box backgroundColor="#ffa8e2" padding="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} color="white" fontWeight="bold">
                <Image src="https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw93f4ac99/images/full/full_2021_/2021/full_2021_grand-canyon-7_2617_bu-bk_P5.png"
                    width="260px" height="auto" margin="auto" />
                <VStack padding="2rem">
                    <Link to="/">Link 1</Link>
                    <Link to="/">Link 2</Link>
                    <Link to="/">Link 3</Link>
                </VStack>
                <VStack padding="2rem">
                    <Link to="/">Link 1</Link>
                    <Link to="/">Link 2</Link>
                    <Link to="/">Link 3</Link>
                </VStack>
            </Grid>
            <Box>
                <Text textAlign="center" color="white" width="100%" borderTop="1px solid white" padding="1rem" marginTop="2rem">
                    Copyright 2021
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
