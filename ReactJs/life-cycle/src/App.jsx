import React, { useState, useEffect } from 'react';

function App() {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            fetchProducts();
        },
        []
    );

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(
        () => {
            console.log('every state change');
        }
    );

    return (
        <div className="container text-center">
            <div className="row">
                {
                    products.map(
                        (prod) => {
                            return (
                                <div className='col-3' key={prod.id}>
                                    <div className="card p-3 my-2">
                                        <img src={prod.image} alt="" width={"100%"} height={350} />
                                        <h6 className='my-2'>{prod.title}</h6>
                                    </div>
                                </div>
                            )
                        }
                    )

                }
            </div>
        </div>
    );
}

export default App;
