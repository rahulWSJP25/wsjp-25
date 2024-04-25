import React from 'react';

export default function Listing({products, range, filterCategory }) {
   

    if (filterCategory != null) {
        products = products.filter(
            (prod) => {
                if (prod.category == filterCategory) return true;
                else return false;
            }
        )
    }

    if (range.from < range.to) {
        products = products.filter(
            (prod) => {
                if (prod.price >= range.from && prod.price <= range.to) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }




    return (
        <div className='h-[600px] col-span-4'>
            <div className='text-xl my-3'>Product Listing ({products.length})</div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    products.map(
                        (prod) => {
                            return <ProductBox {...prod} key={prod.id} />
                        }
                    )
                }
            </div>
        </div>
    );
}

const ProductBox = (props) => {
    return (
        <div className='shadow-lg rounded p-4'>
            <img src={props.image} alt="" className='w-full h-[300px]' />
            <div className='font-bold my-3'>{props.title}</div>
            <div>$ {props.price}</div>
            <div>Rating: {props.rating.rate}</div>
        </div>
    );
};
