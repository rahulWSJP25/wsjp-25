import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const Context = createContext();

export default function MainContext(props) {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(
        () => {
            axios.get('https://fakestoreapi.com/products')
                .then(
                    (success) => {
                        setProducts(success.data);
                    }
                )
                .catch(
                    (error) => {
                        setProducts(error);
                    }
                )
        },
        []
    )

    const addToCart = (pId) => {
        const cartData = [...cart];
        const found = cartData.find(cd => cd.pId == pId);
        if (found) {
            found.qty++;
            setCart(cartData);
        } else {
            setCart(
                [
                    ...cart,
                    {
                        pId,
                        qty: 1
                    }
                ]
            )
        }



    }


    const removeFromCart = (pId) => {
        const newCart = cart.filter(item => item.pId !== pId);
        setCart(newCart);
    }



    return (
        <Context.Provider value={{ products, cart, addToCart, removeFromCart }}>
            {props.children}
        </Context.Provider>
    )
}


export { Context };