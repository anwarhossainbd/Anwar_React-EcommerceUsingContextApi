import React, {Fragment, useContext} from 'react';
import {ProductsContext} from "../Global/ProductsContext";
import Watch2 from "../assets/Images/watchTwo.jpg";
import Banner from "./Banner";

const Products = () => {
    const {products} =useContext(ProductsContext) ;


    return (
        <Fragment>
            <Banner />
           <div className="products container">
               {products.map(products=>(
                   <div className="product" key={products.id}>
                       <div className="product-image">
                           <img src={products.image} alt="not found" />
                       </div>
                       <div className="product-details">
                           <div className="product-name">
                               {products.name}
                           </div>
                           <div className="product-price">
                               ${products.price}
                           </div>

                           <div className="add-to-cart">
                              Add to Cart
                           </div>

                           {products.status==="Hot"?<div className="hot">Hot</div>:""}
                           {products.status==="New"?<div className="new">New</div>:""}
                       </div>
                   </div>



                   ))}
           </div>
        </Fragment>
    );
};

export default Products;