import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShopContext } from '../context/shopContext'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Flex,
    Text,
    Box,
    Image,
    VStack
} from '@chakra-ui/react'

const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <VStack>
                        <Link to="/">1</Link>
                        <Link to="/">2</Link>
                        <Link to="/">3</Link>
                        <Link to="/">4</Link>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default NavMenu
