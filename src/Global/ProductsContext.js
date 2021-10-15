import React, {createContext, useState} from 'react';
import APPleLaptop from "../assets/Images/AppleLaptop.jpg" ;
import HeadPhone1 from "../assets/Images/headPhone.jpg" ;
import HeadPhone2 from "../assets/Images/Headphone2.jpg" ;
import Huawei from "../assets/Images/huawei.jpg" ;
import IPhone from "../assets/Images/Iphone.jpg" ;
import IPhone2 from "../assets/Images/Iphone2.jpg" ;
import Watch1 from "../assets/Images/watchone.jpg" ;
import Watch2 from "../assets/Images/watchTwo.jpg" ;

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {

    const [products]=useState([
        {id:1, name:"Apple Laptop", price:200500, image:APPleLaptop,status:"Hot"},
        {id:2, name:"HeadPhone 1", price:800, image:HeadPhone1,status:"New"},
        {id:3, name:"HeadPhone 2", price:1000, image:HeadPhone2,status:"Hot"},
        {id:4, name:"Huawei", price:20000, image:Huawei,status:"Hot"},
         {id:5, name:"IPhone", price:100500, image:IPhone,status:"New"},
         {id:6, name:"IPhone 2", price:75000, image:IPhone2,status:"Hot"},
         {id:7, name:"Watch 1", price:2000, image:Watch1,status:"New"},
         {id:8, name:"Watch 2", price:2500, image:Watch2,status:"New"},

    ])


    return (
        <ProductsContext.Provider value={{products:[...products]}}>
            {props.children}
        </ProductsContext.Provider>

    );
};

export default ProductsContextProvider;












