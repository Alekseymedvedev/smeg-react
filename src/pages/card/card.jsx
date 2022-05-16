import React, {useState} from 'react';
import {useEffect} from "react";
import classes from "./card.module.css";
import ButtonGroup from "antd/es/button/button-group";
import {MinusOutlined, PlusOutlined,} from '@ant-design/icons'
import {Button, Input} from "antd";

const Card = () => {
    const [productData, setProductData] = useState([])
    useEffect(() => {
        getProduct()

    }, [])
    const getProduct = () => {
        const loc = localStorage.getItem("producDate")
        const local = JSON.parse(loc)
        setProductData(local)
    }

    return (
        <div className="container">
            <h1>Корзина</h1>
            {
                productData.map(product=>
                   <div className={classes.cart}>
                       <img className={classes.img} src={product.img} alt=""/>
                       <div className={classes.title}>{product.title}</div>
                       
                       <ButtonGroup className={classes.btnGroup}>
                    <Button >
                        <MinusOutlined />
                    </Button>
                    <Input className={classes.input}
                        value="1"
                        maxLength={25}
                    />
                    <Button >
                        <PlusOutlined />
                    </Button>
                </ButtonGroup>
                <div className={classes.price}>{product.price}</div>
                       <div className={classes.delete}>удалить</div>
                   </div>
                )
            }

        </div>
    );
};

export default Card;