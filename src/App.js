import React, {useState, useEffect, useCallback} from "react";
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
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [cartProducts, setCartProducts] = useState([]);

  //Add item to the cart
  const addToCart = (product) => {
    const exist = cartProducts.find((item) => item.id === product.id);
    if (exist) {
      alert("This product is already in the cart!");
    } else {
      setCartProducts([...cartProducts, { ...product }]);
    }
  };
  
  //Funtion that delete item from cart
  const deleteCartItem = (id) => {
    let newArr = cartProducts.filter(item => item.id !== id);
    setCartProducts(newArr); 
  } 

  //Function that calculate total price off all products
  const printTotalPrice = useCallback ( () => {
    let newPrice = 0;
    cartProducts.map((item) => {
      return (newPrice += item.price.current * item.quantity);
    });
    setTotalPrice(newPrice);
  }, [cartProducts])

  useEffect(() =>{
    printTotalPrice();
  }, [printTotalPrice])

  //Function that calculate total number of products
  const printTotalProducts = useCallback( () => {
    let numProducts = 0;
    cartProducts.map((item) => {
      return (numProducts += item.quantity);
    });
    setTotalProducts(numProducts);
  }, [cartProducts])
  useEffect(() => {
    printTotalProducts();
  }, [printTotalProducts])

  //Function that increase quantity of products
  const increaseQuantity = (id) => {
    let increased = cartProducts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity === 10 ? 10 : item.quantity + 1,
        };
      }
      return item;
    });
    setCartProducts(increased);
  };

  //Function that decrease quantity of products
  const decreaseQuantity = (id) => {
    let decrease = cartProducts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity === 1 ? 1 : item.quantity - 1,
        };
      }
      return item;
    });
    setCartProducts(decrease);
  };


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
        totalProducts={totalProducts}
        totalPrice={totalPrice}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Home />
      <About />
      <Products addToCart={addToCart}/>
      <Popular addToCart={addToCart}/>
      <MessageUs />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
