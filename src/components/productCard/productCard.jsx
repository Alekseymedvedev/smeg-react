import React from 'react';
import ProductStocks from "../productStocks/productStocks";
import Reviews from "../reviews/reviews";
import ProductTitle from "../productTitle/productTitle";
import Price from "../price/price";
import classes from "./productCard.module.css";
import {Button, Card, Input, Slider} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCardAction, isCountAction} from "../../store/addToCardReduser";
import ButtonGroup from "antd/es/button/button-group";
import {MinusOutlined, PlusOutlined,} from '@ant-design/icons'

const ProductCard = (props) => {
    const dispatch = useDispatch()
    const addProducts = useSelector(state => state.addToCardReduser.addProducts)
    const count = useSelector(state => state.addToCardReduser.addProducts.title)
console.log(count);
    const [addProductCard, setAddProductCard]= useState({title:"",price:""})
    const [isCount, setSetIsCount]= useState(false)

    const addToCard=(e)=>{
        e.stopPropagation()
        const producDate = {
            title :props.title,
            price:props.price,
            img:props.img,
            count: 1
        }
        dispatch(addToCardAction(producDate))
        setAddProductCard(producDate)
        setSetIsCount(true)
        localStorage.setItem("producDate", JSON.stringify(addProducts))
        console.log(producDate);
    }

    
    const countPlus = ()=>{
        dispatch(isCountAction(count))
        console.log(addProducts.title);
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
                {
                    !isCount 
                    ?
                    <Button 
                    onClick={addToCard}
                    type="primary"
                >
                    В корзину
                </Button>
                    :
                    <ButtonGroup className={classes.btnGroup}>
                    <Button >
                        <MinusOutlined />
                    </Button>
                    <Input 
                        className={classes.input}
                        value={addProducts.count}
                        maxLength={25}
                    />
                    <Button onClick={countPlus}>
                        <PlusOutlined />
                    </Button>
                </ButtonGroup>
                }
              
                
            </Card>

        </div>
    );
};

export default ProductCard;