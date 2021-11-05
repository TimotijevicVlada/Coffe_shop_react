import React from 'react';
import Carousel from "react-elastic-carousel";
import { review_items } from '../review';

const Review = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
      ];


    return (
        <div className="review" id="review">
            <div className="review_title">
               <h1>Review</h1> 
            </div>
            <div className="review_lower"> 
               <Carousel breakPoints={breakPoints}>
                    {review_items.map(item => (
                        <div className="review_item" key={item.id}>
                           <img src={`./review_img/${item.img}`} alt={item.name} />
                           <p className="review_comment">{item.comment}</p>
                           <h3 className="review_name">{item.name}</h3>
                           <div className="review_star">
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star"></i>
                               <i className="fas fa-star-half-alt"></i>
                           </div>
                        </div>
                    ))}
               </Carousel> 
            </div>
            
        </div>
    )
}

export default Review;
