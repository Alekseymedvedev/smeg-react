import React from 'react';

const Rating = () => {
    return (
        <div className="rating" >

            <div className="rating__stars">

                <span className="rating__star"></span>

                <div className="rating__stars-done" >
                    <span className="rating__star"></span>
                </div>

            </div>
            <time className="rating__date" dateTime="2021-03-11">28.10.2018</time>
            <span className="rating__counter rating-is-now-rewievs">отзывов</span>
        </div>
    );
};

export default Rating;