import React from 'react';
import { Link } from "react-router-dom";
import classes from "./productTitle.module.css";

const ProductTitle = (props) => {
    return (
        <Link to={`/product/${props.category}`} className="card-type-and-title">
            <span className={classes.category}>{props.categoryTitle}</span>
            <span className={classes.title}>{props.title}</span>
        </Link>
    );
};

export default ProductTitle;