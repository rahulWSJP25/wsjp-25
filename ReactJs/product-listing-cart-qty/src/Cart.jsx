import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { Context } from './MainContext'

export default function Cart() {
    let { cart, products, removeFromCart } = useContext(Context);
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(
        () => {
            let sum = 0;
            if (cart.length != 0) {
                const data = [];
                for (let c of cart) {
                    for (let p of products) {
                        if (c.pId == p.id) {
                            data.push({ ...p, ...c });
                            sum += (p.price * c.qty);
                            break;
                        }
                    }

                }
                setCartProducts(data);
                setTotal(sum);
            }
        },
        [cart]
    )




    return (
        <>
            <Header />
            {
                cartProducts.length == 0
                    ?
                    <h1 className='text-3xl text-center my-5'>Your Cart is empty</h1>
                    :
                    <div className='max-w-[1200px] mx-auto mt-8'>
                        <h1 className='text-3xl font-semibold mb-4'>Your Cart</h1>
                        <div>
                            {
                                cartProducts.map(
                                    (prod, index) => {
                                        return <div key={index} className='bg-white p-4 border-b shadow-md flex items-center gap-3'>
                                            <div className='flex-grow'>
                                                <img src={prod.image} alt="" className='w-[100px] object-cover mb-4 rounded-md' />

                                            </div>
                                            <h2 className='text-lg font-semibold mb-2 w-[500px] flex-grow'>
                                                {prod.title} x {prod.qty}
                                                </h2>
                                            <p className='text-gray-800 font-semibold mb-2 flex-grow'>{prod.price * prod.qty}</p>
                                            <button className='border border-red-500 p-2' onClick={() => removeFromCart(prod.id)}>Remove</button>
                                        </div>
                                    }
                                )
                            }
                        </div>
                        <div className='text-right text-xl my-3'> Total : ${total}</div>
                    </div>


            }

        </>
    )
}
