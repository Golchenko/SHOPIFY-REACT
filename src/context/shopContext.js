import React, { Component } from 'react'
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

class context extends Component {

    state = {
        product: {},
        products: [],
        checkout: {},
        isCartOpen: false,
        isMenuOpen: false
    }

    createCheckout = async () => {

    }

    fetchCheckout = async () => {

    }

    addItemtoCheckout = async => {

    }

    removeLineItem = async (lineItemIdsToRemove) => {

    }

    fetchAllProducts = async () => {

    }

    fetchProductWithHandle = async (handle) => {

    }

    closeCart = () => { }

    openCart = () => { }

    closeMenu = () => { }

    render() {
        return (
            <ShopContext.Provider>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext }

export default context
