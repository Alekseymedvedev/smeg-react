import React from 'react';

const CartButton = () => {
    return (
        <button
            className="cart-button" type="button"
        >
            <svg
                className="cart-button__icon"
                width="20px"
                height="20px"
            >
                <use xlink:href="images/svg-icons/sprites/user-icons.svg#cart-plus-icon"></use>
            </svg>
            <span className="cart-button__text">В корзину</span>
        </button>
    );
};

export default CartButton;