import React, { useContext } from 'react'
import { Box, Badge, Icon, Image, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Flex flexDir="row" justifyContent="space-between" alignItems="center" padding="2rem" backgroundColor="#ffa8e2" >
            <Icon as={MdMenu} fill="#ffffff" width={30} height={30} cursor="pointer"
                onClick={() => openMenu()}
            ></Icon>
            <Link to="/">
                <Image src="https://cdn.shopify.com/s/files/1/0498/0601/6664/files/logo-microgreen_180x.png?v=1602238263" />
            </Link>
            <Box>
                <Icon as={MdShoppingCart} fill="#ffffff" width={30} height={30}
                    cursor="pointer"
                    onClick={() => openCart()}
                />
                <Badge backgroundColor="#ff38bd" borderRadius="50%">{checkout.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )

}

export default NavBar
