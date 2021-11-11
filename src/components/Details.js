import React, {useEffect, useRef} from "react";

const Details = ({ detailProduct, detailsVisible, setDetailsVisible, addToFav, addToCart }) => {

  //Setting the event to close the details when I click out of this div
  let detailsRef = useRef();
  useEffect(() => {
    let detailsHandler = (event) => {
      if(!detailsRef.current.contains(event.target)) {
        setDetailsVisible(false);
      }
    }
    document.addEventListener("mousedown", detailsHandler);

    return () => {
      document.removeEventListener("mousedown", detailsHandler);
    }
  })

  return (
    <div ref={detailsRef} className={detailsVisible ? "details" : "detailsHidden"}>
      <div className="details_header">
        <h4>Details</h4>
        <i
          onClick={() => setDetailsVisible(false)}
          className="fas fa-times"
        ></i>
      </div>
      {detailProduct.length === 0 ? (
        ""
      ) : (
        <div className="details_item">
          <div className="details_img">
            <img
              src={`./coffee_img/${detailProduct.img}`}
              alt={detailProduct.name}
            />
          </div>
          <div className="details_info">
            <div className="details_name">
              <h3>{detailProduct.name}</h3>
            </div>
            <div className="details_desc">
              <p>{detailProduct.desc}</p>
            </div>
            <div className="details_stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="details_events">
                 <i
                onClick={() => addToCart(detailProduct)}
                className="fas fa-shopping-cart"
              ></i>
              <i
                onClick={() => addToFav(detailProduct)}
                className="fas fa-heart"
              ></i>
            </div>
            <div className="details_price">
              <div className="details_new_price">
                <span className="details_currency">$</span>
                <span className="details_price_new">
                  {detailProduct.price.current.toFixed(2)}
                </span>
              </div>
              <div className="details_old_price">
                <span className="details_currency">$</span>
                <span className="details_price_old">
                  {detailProduct.price.old.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
