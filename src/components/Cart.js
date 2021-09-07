import React, { useContext } from 'react'
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
    Link
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext);

    return (
        <>
            <Drawer
                isOpen={isCartOpen}
                placement="right"
                onClose={closeCart}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your shopping cart</DrawerHeader>

                    <DrawerBody>
                        {
                            checkout.lineItems && checkout.lineItems.map(item => (
                                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Box>
                                            <CloseIcon cursor="pointer"
                                                onClick={() => removeLineItem(item.id)} />
                                        </Box>
                                    </Flex>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Image src={item.variant.image.src} />
                                    </Flex>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Text>
                                            {item.title}
                                        </Text>
                                    </Flex>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Text>
                                            {item.variant.price}
                                        </Text>
                                    </Flex>

                                </Grid>
                            ))
                        }
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={closeCart}>
                            Cancel
                        </Button>
                        <Button width="100%">
                            <Link
                                href={checkout.webUrl}                                
                            >
                                Checkout
                            </Link>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart

