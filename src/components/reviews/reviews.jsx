import React from 'react';
import Rating from "../rating/rating";

const Reviews = () => {
    return (
        <div className="card-reviews {{ opts.additionalClasses }}">

            <Rating/>

        </div>
    );
};

export default Reviews;