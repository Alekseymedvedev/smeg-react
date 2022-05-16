import React from 'react';
import classes from "./header.module.css";
import logo from './../logo.svg'
import {Link} from "react-router-dom";
import {Button} from "antd";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.inner}>

                
            <img src={logo} alt=""/>

            <Link to="card" className="card-type-and-title">
                <Button>
                    Корзина
                </Button>
            </Link>
            </div>
            </div>
        </header>
    );
};

export default Header;