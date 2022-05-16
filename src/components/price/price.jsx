import React from 'react';

const Price = (props) => {
    return (
        <div className="price-wrap">
            <span className="price-wrap__price">
                {props.price}
                <i className="price-wrap__currency">&nbsp;руб.</i>
            </span>
            {
                props.discont
                    ?
                    <span className="price-wrap__discount-wrap">
                        <span className="price-wrap__original-price">{props.discont}</span>
                        <i className="price-wrap__currency">&nbsp;руб.</i>
                        <span className="price-wrap__discount-value">-10%</span>
                    </span>
                    : ''
            }
        </div>
    );
};

export default Price;