import React from 'react';

const Cart = ({cartVisibility, cartProducts, deleteCartItem }) => {
    return (
        <div className={cartVisibility ? "cart" : "cartHidden"}>
            {cartProducts.map(item => (
                <div className="cart_item" key={item.id}>
                    <img src={`./coffee_img/${item.img}`} alt={item.name} />
                    <i onClick={() => deleteCartItem(item.id)} className="fas fa-trash"></i>
                </div>
            ))}
        </div>
    )
}

export default Cart;
