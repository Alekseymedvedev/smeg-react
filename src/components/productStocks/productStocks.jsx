import React from 'react';
import classes from "./productStocks.module.css";
const ProductStocks = (props) => {
    return (
        <span className={classes.stock}>
            {props.stock}
        </span>
    );
};

export default ProductStocks;