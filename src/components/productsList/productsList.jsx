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
    const [products, setProducts] = useState([])

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    useEffect(() => {
        // dispatch(fetchProduct())
        return async () => {
            const response = await axios.get(baseUrl + productUrl)
            const arr =[]
            Object.values(response.data).forEach(val=>{
           arr.push({val})})
          setProducts(arr)
        }
    }, [])

    // const filters = () => {
    //     // dispatch(fetchProductAction({products, minPrice, maxPrice}))
    //     const filterProduct = fetchProducts.filter(
    //         product =>
    //             product.price > minPrice
    //             &&
    //             product.price < maxPrice
    //     )

    //     setProducts(filterProduct)
    // }
    const add = async () => {
        const response = await axios.get(baseUrl + productUrl)
            
        const arr =[]
          Object.values(response.data).forEach(val=>{
         arr.push({val})})
        setProducts(arr)
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
                    products.map((prod) => <ProductCard
                            key={prod.val.title}
                            category={prod.val.category}
                            categoryTitle={prod.val.categoryTitle}
                            img={prod.val.link}
                            stock={prod.val.stock}
                            title={prod.val.title}
                            price={prod.val.price}
                            discont={prod.val.priceDiscount}
                    
                        />
                        // console.log(prod.val.category);
                   
                 
                    
                    )

                }
            </div>
        </>
    );
};

export default ProductsList;