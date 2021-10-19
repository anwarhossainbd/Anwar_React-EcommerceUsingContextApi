import React, {useContext} from 'react'
import {CartContext} from "../Global/CartContext";
import NoImage from "../assets/Images/noImg.png"
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
    const {shoppingCart,totalPrice,qty,dispatch} =useContext(CartContext)
    const handleToken =async (token)=>{

        const product ={name:"All Products",price:totalPrice}
        const response = await axios.post("http://localhost:8080/checkout",{
            product,
            token
        })
        console.log(response);
    }

    return (
        <div className="cart-container">
            <div className="cart-details" style={{marginTop:"100px"}}>
                { shoppingCart.length>0 ?
                    shoppingCart.map(cart=>(
                        <div className="cart" key={cart.id}>
                            <span className="cart-image"><img src={cart.image} alt="Not Found" /> </span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">{cart.price}</span>
                            <span className="inc" onClick={()=>dispatch({type:"INC", id:cart.id ,cart})}><i className="fas fa-plus"></i></span>
                            <span className="product-quantity">{cart.qty}</span>
                            <span className="dec" onClick={()=>dispatch({type:"DEC", id:cart.id ,cart})} ><i className="fas fa-minus"></i></span>
                            <span className="product-total-price">${cart.price*cart.qty}</span>
                            <span className="delete-product" onClick={()=>dispatch({type:"DELETE" , id:cart.id ,cart})}><i className="fas fa-trash-alt"></i></span>
                        </div>
                    ))
                    : <div>
                        <h2 className="NoImageTitle">Please Add some Products</h2>
                        <img className="noImage" src={NoImage}/>
                </div>
                }
            </div>

            {shoppingCart.length>0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total Price</div>
                        <div className="items-price"> ${totalPrice}.00</div>
                    </div>
                    <div className="stripe-section">
                        <StripeCheckout
                            stripeKey="pk_test_51Jgto9SHO5t3rrNYYdOXIdScpGSRdEpZcnqeqj3y1CaI8I3DTfoN6qOy8nWizdPSW3dloOn05BmIkJ1c1NT1Wd4X00Sd3aN3IP"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={totalPrice*100}
                            name="All Products"
                        >

                        </StripeCheckout>
                    </div>
                </div>
            </div> :""}

        </div>
    );
};

export default Cart;