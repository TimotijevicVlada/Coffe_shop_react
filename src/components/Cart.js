import React from "react";

const Cart = ({ cartVisibility, cartProducts, setCartProducts, deleteCartItem, totalProducts, totalPrice, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className={cartVisibility ? "cart" : "cartHidden"}>
      {cartProducts.length === 0 ? (
        <div className="empty_cart">Cart is empty</div>
      ) : (
        <div className="cart_products">
          <div className="cart_upper">
            {cartProducts.map((item) => (
              <div className="cart_item" key={item.id}>
                <div className="cart_item_info">
                  <div className="cart_item_img">
                    <img src={`./coffee_img/${item.img}`} alt={item.name} />
                  </div>
                  <div className="cart_item_name_price">
                    <span>{item.name}</span>
                    <span>${item.price.current.toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart_item_events">
                  <div className="cart_item_qty">
                    <div>
                      <i onClick={() => increaseQuantity(item.id)} className="fas fa-chevron-up"></i>
                    </div>
                    <div>{item.quantity}</div>
                    <div>
                      <i onClick={() => decreaseQuantity(item.id)} className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <i
                    onClick={() => deleteCartItem(item.id)}
                    className="fas fa-trash"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="cart_lower">
            <div className="delete_all_items">
              <button onClick={() => setCartProducts([])}>Delete all</button>
            </div>
            <div className="cart_sum">
              <h4>Total poducts: {totalProducts}</h4>
              <h4>Total price: ${totalPrice.toFixed(2)}</h4>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
