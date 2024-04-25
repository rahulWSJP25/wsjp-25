import React, { useContext } from 'react'
import Header from './Header'
import { Context } from './MainContext'

export default function Cart() {
    let { cart, products, removeFromCart } = useContext(Context);
    if (cart.length != 0) {
        products = products.filter(
            (prod) => {
                if (cart.includes(prod.id)) return true;
                else return false;
            }
        )
    }



    return (
        <>
            <Header />
            {
                cart.length == 0
                    ?
                    <h1 className='text-3xl text-center my-5'>Your Cart is empty</h1>
                    :
                    <div className='max-w-[1200px] mx-auto mt-8'>
                        <h1 className='text-3xl font-semibold mb-4'>Your Cart</h1>
                        <div>
                            {
                                products.map(
                                    (prod, index) => {
                                        return <div key={index} className='bg-white p-4 border-b shadow-md flex items-center gap-3'>
                                            <div className='flex-grow'>
                                                <img src={prod.image} alt="" className='w-[100px] object-cover mb-4 rounded-md' />

                                            </div>
                                            <h2 className='text-lg font-semibold mb-2 w-[500px] flex-grow'>{prod.title}</h2>
                                            <p className='text-gray-800 font-semibold mb-2 flex-grow'>{prod.price}</p>
                                            <button className='border border-red-500 p-2' onClick={() => removeFromCart(prod.id)}>Remove</button>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>


            }

        </>
    )
}
