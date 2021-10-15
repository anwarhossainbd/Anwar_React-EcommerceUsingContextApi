export const CartReducer=(state,action )=>{

    const {shoppingCart,totalPrice,qty}=state ;

    let product ;
    let updatePrice ;
    let updateQty ;

    switch (action.type){

        case "ADD_TO_CART":
            const check = shoppingCart.find(pro=> pro.id=== action.id) ;

            if (check){
                alert("This is already added")
                return state
            } else {
               product = action.products ;
               product['qty']=1 ;
               updateQty =qty+1 ;
               updatePrice = totalPrice + product.price;
               return {shoppingCart:[product,...shoppingCart],
                   totalPrice:updatePrice , qty:updateQty
               }
            }
            break ;

        default: return state ;
    }

}