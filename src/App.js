import React, {useState} from "react";
import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";

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
      <Products />
    </div>
  );
}

export default App;
