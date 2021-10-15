import React, {useContext} from 'react'
import {CartContext} from "../Global/CartContext";
import NoImage from "../assets/Images/noImg.png"

const Cart = () => {
    const {shoppingCart,totalPrice,qty,dispatch} =useContext(CartContext)

    return (
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:"120px"}}>
                { shoppingCart.length>0 ?
                    shoppingCart.map(cart=>(
                        <div className="cart" key={cart.id}>
                            <span className="cart-image"><img src={cart.image} alt="Not Found" /> </span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">{cart.price}</span>
                        </div>
                    ))
                    : <div>
                        <h2 className="NoImageTitle">Please Add some Products</h2>
                        <img className="noImage" src={NoImage}/>
                </div>
                }
            </div>
        </div>
    );
};

export default Cart;