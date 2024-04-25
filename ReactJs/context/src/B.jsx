import React, { useContext } from 'react';
import C from './C';
import { Context } from './Main';

export default function B() {
    const {price} = useContext(Context);
    return (
        <div>
            {price}
            <hr />
           <C/>
        </div>
    )
}


