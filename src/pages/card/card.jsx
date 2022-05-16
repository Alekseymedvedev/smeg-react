import React, {useState} from 'react';
import {useEffect} from "react";
import axios from "axios";
import {baseUrl, productUrl} from "../../URL/UPL";
import {Badge} from "antd";

const Card = () => {
    const [productData, setProductData] = useState([])
    const [productDataNumber, setProductDataNumber] = useState(0)
    useEffect(() => {
        get()

    }, [])
    const get = () => {
        const loc = localStorage.getItem("producDate")
        const local = JSON.parse(loc)
        console.log(local)

        setProductData(local)
    }
    const [state, setState] = useState({
        currentStep: 0,
        modalVisible: false,
        badgeCount: 5,
        showBadge: true,
    });
    return (
        <div className="container">
            Корзина

            {
                productData.map(product=>
                   <div>

                       <Badge dot={state.showBadge}>
                           <a href="#" className="head-example" />
                       </Badge>
                       <div>{product.title}</div>
                       <div>{product.price}</div>
                       <img src={product.img} alt=""/>
                   </div>
                )
            }

        </div>
    );
};

export default Card;