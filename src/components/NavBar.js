import React, { useContext } from 'react'
import { Box, Text, Icon, Image, Flex } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingCart } from 'react-icons/md'


const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Flex flexDir="row" justifyContent="space-between" padding="2rem" backgroundColor="#ffa8e2" >
            <Icon as={MdMenu} fill="#ffffff" width={30} height={30}></Icon>
            <Image src="https://cdn.shopify.com/s/files/1/0498/0601/6664/files/logo-microgreen_180x.png?v=1602238263" />
            <Icon as={MdShoppingCart} fill="#ffffff" width={30} height={30}
                cursor="pointer" onClick={() => openCart()}
            />
        </Flex>
    )

}

export default NavBar
