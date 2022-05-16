import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../../components/productCard/productCard";
import {Outlet} from "react-router-dom";
import Categories from "../../components/categories/categories";
import ProductsList from "../../components/productsList/productsList";

const Home = () => {

    return (
        <div className="container">
            <Categories/>
            <ProductsList/>

            <Outlet/>
        </div>
    );
};

export default Home;