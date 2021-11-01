import React, {useState} from "react";
import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {

  const [contact, setContact] = useState(false);


  return (
    <div className="App">
      <Navbar setContact={setContact} contact={contact}/>
      <Home contact={contact} />
      <Products />
    </div>
  );
}

export default App;
