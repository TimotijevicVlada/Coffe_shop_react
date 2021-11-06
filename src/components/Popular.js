import React, {useState} from "react";
import Carousel from "react-elastic-carousel";
import {products} from "../data";

const Popular = () => {

  const [popular] = useState(products.filter(item => item.stars > 4));


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className="popular" id="popular">
      <div className="popular_title">
        <h1>Most popular</h1>
      </div>

      <div className="popular_item_wrapper">
        <Carousel breakPoints={breakPoints}>
          {popular.map(item => (
              <div className="item" key={item.id}>
                  <img src={`./coffee_img/${item.img}`} alt={item.name} />
                  <div className="popular_hidden_info">
                    <div className="popular_name"><span>{item.name}</span></div>
                    <div className="popular_price"><span className="popular_price_span"><span className="popular_current">${item.price.current.toFixed(2)}</span><span className="popular_old">${item.price.old.toFixed(2)}</span></span></div>
                    <div className="popular_stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>    
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>             
                    </div>
                  </div>
              </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
