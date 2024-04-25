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
        //   console.log(pId);
        if (!cart.includes(pId)) setCart([...cart, pId]);


    }

    const removeFromCart = (pId) => {
        const newCart = cart.filter(
            (item) => {
                if (item == pId) return false;
                else return true;
            }
        )
        setCart(newCart);
    }

    return (
        <Context.Provider value={{ products, cart, addToCart, removeFromCart }}>
            {props.children}
        </Context.Provider>
    )
}


export { Context };