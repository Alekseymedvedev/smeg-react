import React from 'react';
import classes from "./header.module.css";
import logo from '../../logo.svg'
import {Link} from "react-router-dom";
import {Button} from "antd";
import AuthModal from "../authModal/authModal";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.inner}>
                    <img src={logo} alt=""/>
                    <div className={classes.btnInner}>
                        <AuthModal/>
                        <Link to="card" className="card-type-and-title">
                            <Button type="primary">
                                Корзина
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;