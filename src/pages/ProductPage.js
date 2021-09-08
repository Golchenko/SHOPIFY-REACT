import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Image, Text, Button, Headaing, Flex, Center, Heading } from '@chakra-ui/react';


import { ShopContext } from '../context/shopContext';

const ProductPage = () => {

    let { handle } = useParams()

    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <div>Loading...</div>

    return (
        <Box padding="2rem">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} margin="auto">
                <Flex justifyContent="center" alignItems="center">
                    <Image src={product.images[0].src} />
                </Flex>
                <Box paddingX="2rem">
                    <Heading marginBottom="2rem">{product.title}</Heading>
                    <Text marginBottom="2rem" fontWeight="bold">${product.variants[0].price}</Text>
                    <Button marginBottom="2rem" backgroundColor="#ffa8e2" 
                        onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                        width="20rem"
                        color="white"
                        fontWeight="bold"
                        _hover={{ opacity:'90%' }}
                    >
                        Add to cart
                    </Button>
                    <Text color="#718096">{product.description}</Text>
                </Box>
            </Grid>
        </Box>
    )
}

export default ProductPage
