import React from 'react';
import coffee from "../image/lavazza.png";
import coffee1 from "../image/lavazza_crema_light.png";
import coffee2 from "../image/lavazza_crema.png";
import coffee3 from "../image/lavazza_cremosa.png";
import coffee4 from "../image/lavazza_egusto.png";
import coffee5 from "../image/lavazza_rossa.png";
import coffee6 from "../image/lavazza_green.png";
import coffee7 from "../image/lavazza_grand.png";

const Products = () => {
    return (
        <div className="products">
            <div className="item">
                <img src={coffee} alt="lavazza" />
            </div>
            <div className="item">
                <img src={coffee1} alt="lavazza1" />
            </div>
            <div className="item">
                <img src={coffee2} alt="lavazza1" />
            </div>
            <div className="item">
                <img src={coffee3} alt="lavazza1" />
            </div>
            <div className="item">
                <img src={coffee4} alt="lavazza1" />
            </div>
            <div className="item">
                <img src={coffee5} alt="lavazza1" />
            </div>
            <div className="item">
                <img src={coffee6} alt="lavazza1" />
            </div>
            <div className="item">
                <img src={coffee7} alt="lavazza1" />
            </div>
        </div>
    )
}

export default Products;
