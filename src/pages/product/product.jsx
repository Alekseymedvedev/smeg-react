import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ProductCard from "../../components/productCard/productCard";

const Product = () => {
    const params =useParams()
    const [products, setProducts] = useState([
        {category: '', categoryTitle: '', img: '', stock: '', title: '',}

    ])

    const fetchPost = async () => {
        const response = await axios.get('https://omoykiry-default-rtdb.europe-west1.firebasedatabase.app/products.json')
        setProducts(response.data.filter(product=>product.category === params.category))
    }

    useEffect(() => {
        fetchPost()

    }, [])
    return (
        <div>
            <h1>Product</h1>
            {
                products.map((product) =>
                    <ProductCard
                        key={product.title}
                        category={product.category}
                        categoryTitle={product.categoryTitle}
                        img={product.img}
                        stock={product.stock}
                        title={product.title}
                        price={product.price}
                        discont={product.discont}

                    />
                )
            }
        </div>
    );
};

export default Product;