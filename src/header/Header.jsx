import React from 'react';
import classes from "./header.module.css";
import logo from './../logo.svg'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className='header js-header'>
            <div className="container">
                <img src={logo} alt=""/>
                <Link to="card" className="card-type-and-title">Корзина</Link>
            </div>
        </header>
    );
};

export default Header;