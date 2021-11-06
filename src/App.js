import React, {useState, useEffect} from "react";
import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import MessageUs from "./components/MessageUs";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import About from "./components/About";
import Review from "./components/Review";

function App() {

  const [contact, setContact] = useState(false);
  const [switchContact, setSwitchContact] = useState("login");
  const [cartVisibility, setCartVisibility] = useState(false);

  const [cartProducts, setCartProducts] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    setCartNum(cartProducts.length)
  }, [cartProducts])


  const deleteCartItem = (id) => {
    let newArr = cartProducts.filter(item => item.id !== id);
    setCartProducts(newArr); 
  } 


  return (
    <div className="App">
      <Navbar 
        setContact={setContact} 
        contact={contact}
        switchContact={switchContact} 
        setSwitchContact={setSwitchContact}
        cartVisibility={cartVisibility}
        setCartVisibility={setCartVisibility}
        cartProducts={cartProducts}
        deleteCartItem={deleteCartItem}
        cartNum={cartNum}
      />
      <Home />
      <About />
      <Products cartProducts={cartProducts} setCartProducts={setCartProducts} setCartNum={setCartNum}/>
      <Popular />
      <MessageUs />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
