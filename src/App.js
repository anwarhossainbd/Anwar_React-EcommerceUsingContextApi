import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProductsContextProvider from "./Global/ProductsContext";
import './App.css';
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <ProductsContextProvider>
            <Products />
        </ProductsContextProvider>

    </div>
  );
}

export default App;
