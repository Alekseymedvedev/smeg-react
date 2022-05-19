import React, {useMemo} from 'react';
import ProductCard from "../productCard/productCard";
import {useEffect, useState} from "react";
import {fetchProduct} from "../../API/fetchProduct";
import {useDispatch, useSelector} from "react-redux";
import classes from "./productsList.module.css"
import {Slider} from "antd";
import axios from "axios";
import {baseUrl, productUrl} from "../../URL/UPL";
import {fetchProductAction} from "../../store/fetchProductsReduser";

const ProductsList = () => {


    const dispatch = useDispatch()
    const fetchProducts = useSelector(state => state.productReduser.product)
    const addProducts = useSelector(state => state.addToCardReduser.addProducts)
    const [products, setProducts] = useState([])

    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    useEffect(() => {
        dispatch(fetchProduct())
        // return async () => {
        //     const response = await axios.get(baseUrl + productUrl)
            // const arr =[]
            // Object.values(fetchProducts).forEach(val=>{
            //     arr.push({val})
            // })
            //     setProducts(arr)
            // }
    }, [])

    const filters = () => {
        // dispatch(fetchProductAction({products, minPrice, maxPrice}))
        const filterProduct = fetchProducts.filter(
            product =>
                Number(product.price) > Number(minPrice)
                &&
                Number(product.price) < Number(maxPrice)
        )

        dispatch(fetchProductAction(filterProduct))
        console.log(filterProduct);
    }

    return (
        <>
            <Slider onChange={(val) => {
                setMinPrice(val[0])
                setMaxPrice(val[1])
                filters()
            }}
                    max={1000000}
                    min={15}
                    range
                    defaultValue={[15, 20000]}/>

            <div className={classes.inner}>

                {

                    fetchProducts.map((prod,index) => {
                       return <ProductCard
                            key={prod.title+index}
                            category={prod.category}
                            categoryTitle={prod.categoryTitle}
                            img={prod.link}
                            stock={prod.stock}
                            title={prod.title}
                            price={prod.price}
                            discont={prod.priceDiscount}
                    
                        />
                    }
                    )
                }
            </div>
        </>
    );
};

export default ProductsList;