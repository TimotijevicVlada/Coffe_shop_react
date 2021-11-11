import React, {useRef, useEffect} from "react";

const Favorite = ({ favIcon, favVisible, setFavVisible, favProducts, deleteFavItem, addToCart, viewDetails }) => {

  //Setting the event to close the favorite when I click out of this div
  let favRef = useRef();
  useEffect(() => {
    let favHandler = (event) => {
      if(!favRef.current.contains(event.target) && !favIcon.current.contains(event.target)) {
        setFavVisible(false);
      }
    }
    document.addEventListener("mousedown", favHandler);

    return () => {
      document.removeEventListener("mousedown", favHandler);
    }
  })

  return (
    <div ref={favRef} className={favVisible ? "favorite" : "favorite favHidden"}>
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
                    <i onClick={() => viewDetails(item)} className="fas fa-eye"></i>
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
