import React from "react";
import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
    </div>
  );
}

export default App;
