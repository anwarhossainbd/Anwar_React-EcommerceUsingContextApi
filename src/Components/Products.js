import React, {useContext} from 'react';
import {ProductsContext} from "../Global/ProductsContext";

const Products = () => {
    const {products} =useContext(ProductsContext) ;


    return (
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
                               {products.price}
                           </div>
                       </div>
                   </div>
               ))}
           </div>
    );
};

export default Products;