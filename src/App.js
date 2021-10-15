import Navbar from "./Components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import './App.css';
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import CartContextProvider from "./Global/CartContext";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div>

        <ProductsContextProvider>
            <CartContextProvider>
            <Router>
                <Navbar />

                <Switch>
                    <Route path="/" exact={true} component={Products}/>
                    <Route path="/cart" exact={true} component={Cart}/>
                    <Route  component={NotFound}/>
                </Switch>

            </Router>
            </CartContextProvider>
        </ProductsContextProvider>

    </div>
  );
}

export default App;
