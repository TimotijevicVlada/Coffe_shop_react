import React from "react";

const Cart = ({ cartVisibility, cartProducts, deleteCartItem }) => {
  return (
    <div className={cartVisibility ? "cart" : "cartHidden"}>
      {cartProducts.length === 0 ? (
        <div className="empty_cart">Cart is empty</div>
      ) : (
        cartProducts.map((item) => (
          <div className="cart_item" key={item.id}>
            <div className="cart_item_img">
                <img src={`./coffee_img/${item.img}`} alt={item.name} />
            </div>
            <div className="cart_item_info">
                <span>{item.name}</span>
                <span>${item.price.current.toFixed(2)}</span>
            </div>
            <div className="cart_item_events">
                <div className="cart_item_qty">
                    <div><i className="fas fa-chevron-up"></i></div>
                    <div>1</div>
                    <div><i className="fas fa-chevron-down"></i></div>
                </div>
                <i onClick={() => deleteCartItem(item.id)} className="fas fa-trash"></i>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
