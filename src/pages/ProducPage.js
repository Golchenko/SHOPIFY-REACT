import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ShopContext } from '../context/shopContext';

const ProducPage = () => {

    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <div>Loading...</div>

    return (
        <div>
            <a href='h'>{product.title}</a>
        </div>
    )
}

export default ProducPage
