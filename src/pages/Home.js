import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText';
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return
    <div>
        Loading...
    </div>

    return (
        <Box>
            <Hero />
            <ImageWithText
                // reverse
                image="https://t4.ftcdn.net/jpg/03/14/03/83/400_F_314038330_JRy5MoHhcQrbx9uw7LxYSf5I26Ogeeln.jpg"
                heading="Heading"
                text="Canyon Bicycles GmbH is a German manufacturer of road bikes, mountain bikes, hybrid bikes, triathlon bikes and e-bikes based in Koblenz, Germany."
            />
            <ImageWithText
                reverse
                image="https://img.redbull.com/images/c_crop,x_0,y_0,h_2133,w_3200/c_fill,w_830,h_553/q_auto,f_auto/redbullcom/2021/6/29/iqekuypa8jf55wy14iqf/emily-batty-canyon-frame"
                heading="Heading"
                text="Canadian cross-country rider Emily Batty has made the move to a brand new bike sponsor for 2021. Read on to learn all about her new Canyon Lux."
            />
            <RichText 
                heading="Canyon Bicycles GmbH"
                text="German manufacturer of road bikes, mountain bikes, hybrid bikes, triathlon bikes and e-bikes based in Koblenz, Germany."
            />
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
                {
                    products.map(product => (
                        <Link to={`/products/${product.handle}`} key={product.id}>
                            <Box _hover={{ opacity: '80%' }} textAlign="center">
                                <Image
                                    src={product.images[0].src}
                                />
                                <Text>{product.title}</Text>
                                <Text>${product.variants[0].price}</Text>
                            </Box>
                        </Link>
                    ))
                }
            </Grid>

        </Box>
    )
}

export default Home
