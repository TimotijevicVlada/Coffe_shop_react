import React, {useState, useEffect, useCallback, useRef} from "react";
import './style/App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import MessageUs from "./components/MessageUs";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import About from "./components/About";
import Review from "./components/Review";
import Favorite from "./components/Favorite";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Details from "./components/Details";

function App() {

  //States
  const [contact, setContact] = useState(false);
  const [switchContact, setSwitchContact] = useState("login");
  const [cartVisibility, setCartVisibility] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [favVisible, setFavVisible] = useState(false);
  const [favProducts, setFavProducts] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [detailProduct, setDetailProduct] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");


  //Funtion to sort the favorite by price
  const orderFavorite = (direction) => {
    if (direction === "asc") {
      return [...favProducts].sort((a, b) => (a.price.current > b.price.current ? 1 : -1));
    }
    if (direction === "desc") {
      return [...favProducts].sort((a, b) => (a.price.current > b.price.current ? -1 : 1));
    }
    return favProducts;
  };
  
  //Funtion to switch direction of sorting
  const switchDirection = () => {
    if (sort === "desc") {
      setSort("asc");
    } else {
      setSort("desc");
    }
  };

  //Variable that represent sorted favorite products
  const orderedFavorites = orderFavorite(sort);
  
  //Variable that represent filtered favorite products
  const filteredFavorite = orderedFavorites.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  //Add item to the cart
  const addToCart = (product) => {
    const exist = cartProducts.find((item) => item.id === product.id);
    if (exist) {
      setCartProducts(cartProducts.map(item => item.id === product.id ? 
        { ...exist, quantity: exist.quantity > 9 ? 10 : exist.quantity + 1} : item))
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

  //Add item to the Favorite
  const addToFav = (product) => {
    const exist = favProducts.find((item) => item.id === product.id);
    if (exist) {
      alert("This product is already in the favorite!");
    } else {
      setFavProducts([...favProducts, { ...product }]);
    }
  };

  //Funtion that delete item from favorite
  const deleteFavItem = (id) => {
    let newArr = favProducts.filter(item => item.id !== id);
    setFavProducts(newArr); 
  } 

  //ViewDetails function
  const viewDetails = (item) => {
    setDetailProduct(item);
    setDetailsVisible(true);
    setFavVisible(false);
    setCartVisibility(false);
    setContact(false);
    setMenuVisible(false);
  }

   //Function that get cart storage
   const getCartStorage = () => {
    if(localStorage.getItem("cartStorage") === null) {
      localStorage.setItem("cartStorage", JSON.stringify([]));
    } else {
      const cartLocalStorage = JSON.parse(localStorage.getItem("cartStorage"));
      setCartProducts(cartLocalStorage);
    }
  }
  useEffect(() => {
    getCartStorage();
  }, [])

  //Function that save cart item to local storage
  const saveCartStorage = useCallback( () => {
    localStorage.setItem("cartStorage", JSON.stringify(cartProducts));
  }, [cartProducts])

  useEffect(() => {
    saveCartStorage();
  }, [saveCartStorage])

  //Function that get favorite storage
  const getfavoriteStorage = () => {
    if(localStorage.getItem("favoriteStorage") === null) {
      localStorage.setItem("favoriteStorage", JSON.stringify([]));
    } else {
      const favLocalStorage = JSON.parse(localStorage.getItem("favoriteStorage"));
      setFavProducts(favLocalStorage);
    }
  }
  useEffect(() => {
    getfavoriteStorage();
  }, [])

  //Function that save favorite item to local storage
  const saveFavoriteStorage = useCallback( () => {
    localStorage.setItem("favoriteStorage", JSON.stringify(favProducts));
  }, [favProducts])

  useEffect(() => {
    saveFavoriteStorage();
  }, [saveFavoriteStorage])

  
  //References for icon in the navbar
  const cartIcon = useRef();
  const favIcon = useRef();
  const contactIcon = useRef();
  const menuIcon = useRef();
  

  return (
    <div className="App">
      <Navbar 
          setContact={setContact} 
          contact={contact}
          cartVisibility={cartVisibility}
          setCartVisibility={setCartVisibility}
          totalProducts={totalProducts}
          favVisible={favVisible}
          setFavVisible={setFavVisible}
          favProducts={favProducts}
          setDetailsVisible={setDetailsVisible}
          menuVisible={menuVisible}
          setMenuVisible={setMenuVisible}
          cartIcon={cartIcon}
          favIcon={favIcon}
          contactIcon={contactIcon}
          menuIcon={menuIcon}
        />
      <Favorite 
          favVisible={favVisible} 
          favProducts={favProducts}
          filteredFavorite={filteredFavorite} 
          deleteFavItem={deleteFavItem} 
          addToCart={addToCart}
          viewDetails={viewDetails}
          setFavVisible={setFavVisible}
          favIcon={favIcon}
          setSearch={setSearch}
          switchDirection={switchDirection}
          sort={sort}
        />
      <Contact
          contact={contact}
          setContact={setContact}
          switchContact={switchContact}
          setSwitchContact={setSwitchContact}
          contactIcon={contactIcon}
        />
        <Cart 
          cartVisibility={cartVisibility}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          deleteCartItem={deleteCartItem}
          totalProducts={totalProducts}
          totalPrice={totalPrice}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          setCartVisibility={setCartVisibility}
          cartIcon={cartIcon}
        />
      <Details 
          detailProduct={detailProduct}
          detailsVisible={detailsVisible}
          setDetailsVisible={setDetailsVisible}
          addToFav={addToFav}
          addToCart={addToCart}
        />
      <Home />
      <About />
      <Products 
          addToCart={addToCart}   
          addToFav={addToFav}
          viewDetails={viewDetails}
        />
      <Popular 
          addToCart={addToCart}
          addToFav={addToFav}
        />
      <MessageUs />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
