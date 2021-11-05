import React, {useState} from "react";
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



  return (
    <div className="App">
      <Navbar 
        setContact={setContact} 
        contact={contact}
        switchContact={switchContact} 
        setSwitchContact={setSwitchContact}
        cartVisibility={cartVisibility}
        setCartVisibility={setCartVisibility}
      />
      <Home />
      <About />
      <Products />
      <Popular />
      <MessageUs />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
