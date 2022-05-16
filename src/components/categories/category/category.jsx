import React from 'react';
import { Link } from "react-router-dom";
import {Card} from "antd";
import classes from "./category.module.css"

const Category = (props) => {
    return (
        <li >
            <Card bordered={false} style={{ width: 370 }}  >
                <Link to={`/catalog/${props.category}`} className={classes.category}>
                
                    <div className="categories__wrap">
                        <div className="categories__top-text">
                            <span className="categories__title">{props.categoryTitle}</span>
                            <span className="categories__subtitle">{props.text}</span>
                        </div>
                        <span className="categories__price">от 54 800
                                                до 1 000 000 руб.
                                            </span>
                    </div>
                    <div className="categories__pic">
                        <img src={props.img} alt=""/>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default Category;