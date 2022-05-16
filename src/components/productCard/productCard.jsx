import React from 'react';
import ProductStocks from "../productStocks/productStocks";
import Reviews from "../reviews/reviews";
import ProductTitle from "../productTitle/productTitle";
import Price from "../price/price";
import classes from "./productCard.module.css";
import {Button, Card, Input, Slider} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCardAction, addToCardReduser} from "../../store/addToCardReduser";
import ButtonGroup from "antd/es/button/button-group";
import {MinusOutlined, PlusOutlined,} from '@ant-design/icons'

const ProductCard = (props) => {
    const dispatch = useDispatch()
    const addProducts = useSelector(state => state.addToCardReduser.addProducts)
    const [addProductCard, setAddProductCard]= useState({title:"",price:""})

    const addToCard=(e)=>{
        e.stopPropagation()
        const producDate = {
            title :props.categoryTitle,
            price:props.price,
            img:props.img
        }
        dispatch(addToCardAction(producDate))
        setAddProductCard(producDate)
        localStorage.setItem("producDate", JSON.stringify(addProducts))

        console.log(addProductCard)
        console.log(producDate)
        console.log(addProducts)
    }

    return (

        <div className="site-card-border-less-wrapper">


            <Card bordered={false} style={{ width: 300 }}>
                <img className={classes.img} src={props.img} alt=""/>
                <ProductStocks stock={props.stock}/>
                <ProductTitle
                    category={props.category}
                    categoryTitle={props.categoryTitle}
                    title={props.title}
                />
                <Price price={props.price} discont={props.discont}/>
                <Button
                    onClick={addToCard}
                    type="primary"
                >
                    В корзину
                </Button>
                <ButtonGroup>
                    <Button >
                        <MinusOutlined />
                    </Button>
                    <Input
                        value="1"
                        maxLength={25}
                    />
                    <Button >
                        <PlusOutlined />
                    </Button>
                </ButtonGroup>
            </Card>

        </div>
    );
};

export default ProductCard;