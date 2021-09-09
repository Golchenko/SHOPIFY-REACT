import React from 'react'
import { Box, Text, Heading, Center } from '@chakra-ui/react'

const RichText = ({ heading, text }) => {
    return (
        <Box padding="6rem">
            <Center display="flex" flexDir="column" alignItems="center">
                <Heading marginBottom="2rem">
                    {heading && heading}
                </Heading>
                <Text>
                    {text && text}
                </Text>
            </Center>
        </Box>
    )
}

export default RichText
