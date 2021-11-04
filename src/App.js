import React, {useState} from "react";
import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import MessageUs from "./components/MessageUs";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import About from "./components/About";

function App() {

  const [contact, setContact] = useState(false);
  const [switchContact, setSwitchContact] = useState("login");


  return (
    <div className="App">
      <Navbar 
        setContact={setContact} 
        contact={contact}
      />
      <Home 
        contact={contact} 
        setContact={setContact} 
        switchContact={switchContact} 
        setSwitchContact={setSwitchContact}
      />
      <About />
      <Products />
      <Popular />
      <MessageUs />
      <Footer />
    </div>
  );
}

export default App;
