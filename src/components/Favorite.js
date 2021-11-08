import React from "react";

const Favorite = ({ favVisible, favProducts, deleteFavItem, addToCart }) => {
  return (
    <div className={favVisible ? "favorite" : "favorite favHidden"}>
      {favProducts.length < 1 ? (
        <div className="favorite_empty">Favorite is empty</div>
      ) : (
        <div className="fav_inner">
          {favProducts.map((item) => (
            <div className="fav_item" key={item.id}>
                <div className="fav_img">
                    <img src={`./coffee_img/${item.img}`} alt={item.name} />
                </div>
                <div className="fav_info">
                    <span>{item.name}</span>
                    <span>${item.price.current.toFixed(2)}</span>
                </div>
                <div className="fav_events">
                    <i className="fas fa-eye"></i>
                    <i onClick={() => addToCart(item)} className="fas fa-shopping-cart"></i>
                </div>
                <div className="fav_trash">
                    <i onClick={() => deleteFavItem(item.id)} className="fas fa-trash"></i>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
