import React, {useContext} from 'react'
import {CartContext} from "../Global/CartContext";

const Cart = () => {
    const data =useContext(CartContext)
    console.log(data)
    return (
        <div>
            <h1>4444</h1>
            <h1>4444</h1>
            <h1>4444</h1>
            <h1>4444</h1>
            <h1>4444</h1>
            <h1>4444</h1>
        </div>
    );
};

export default Cart;