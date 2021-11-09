import React from 'react';

const Details = ({ detailProduct, detailsVisible, setDetailsVisible, addToFav, addToCart}) => {



    return (
        <div className={detailsVisible ? "details" : "detailsHidden"}>
            <div className="details_header">
                <h4>Details</h4>
                <i onClick={() => setDetailsVisible(false)} className="fas fa-times"></i>
            </div>
            <div className="details_item">
                <div className="details_img">
                    <img src={`./coffee_img/${detailProduct.img}`} alt={detailProduct.name} />
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
                        <i onClick={() => addToFav(detailProduct)} className="fas fa-eye"></i>
                        <i onClick={() => addToCart(detailProduct)} className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="details_price">
                        <span><span className="details_currency">$</span>{detailProduct.price.current.toFixed(2)}</span>
                        <span className="line_through"><span className="details_currency">$</span><span className="details_price_old">{detailProduct.price.old.toFixed(2)}</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
