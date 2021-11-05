import React from 'react';

const Cart = ({cartVisibility }) => {
    return (
        <div className={cartVisibility ? "cart" : "cartHidden"}>
            <h3>Cart is empty</h3>
        </div>
    )
}

export default Cart;
