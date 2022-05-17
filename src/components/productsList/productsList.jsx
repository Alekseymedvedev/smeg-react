import React, {useMemo} from 'react';
import ProductCard from "../productCard/productCard";
import {useEffect, useState} from "react";
import {fetchProduct} from "../../API/fetchProduct";
import {useDispatch, useSelector} from "react-redux";
import classes from "./productsList.module.css"
import {Slider} from "antd";
import axios from "axios";
import {baseUrl, productUrl} from "../../URL/UPL";

const ProductsList = () => {


    const dispatch = useDispatch()
    const fetchProducts = useSelector(state => state.productReduser.product)
    const addProducts = useSelector(state => state.addToCardReduser.addProducts)
    const [products, setProducts] = useState([{category: 'holodilniki', link: '', price: '148 690', priceDiscount: '148 69'}])

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    // useEffect(() => {
    //     dispatch(fetchProduct())
    //     // return async () => {
    //     //     const response = await axios.get(baseUrl + productUrl)
    //     //     setProducts(response.data)
    //     // }
    //     console.log(fetchProducts);
    // }, [])

    const filters = () => {
        // dispatch(fetchProductAction({products, minPrice, maxPrice}))
        const filterProduct = fetchProducts.filter(
            product =>
                product.price > minPrice
                &&
                product.price < maxPrice
        )

        setProducts(filterProduct)
    }
    const add = async () => {
        const response = await axios.get(baseUrl + productUrl)
        setProducts(response.data)
        const aaa = JSON.stringify(response.data)

        console.log(JSON.parse(aaa))

    }
    return (
        <>
            <button onClick={()=>{add()}}>add</button>
            <Slider onChange={(val) => {
                setMinPrice(val[0])
                setMaxPrice(val[1])
                // filters()
            }}
                    max={100000}
                    min={15}
                    range
                    defaultValue={[15, 20000]}/>

            <div className={classes.inner}>

                {
                    // products.map((prod) =>
                    //     <ProductCard
                    //         key={prod.title}
                    //         category={prod.category}
                    //         categoryTitle={prod.categoryTitle}
                    //         img={prod.img}
                    //         stock={prod.stoks}
                    //         title={prod.title}
                    //         price={prod.price}
                    //         discont={prod.discont}
                    //
                    //     />
                    // )

                }
            </div>
        </>
    );
};

export default ProductsList;