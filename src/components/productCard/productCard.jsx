import React from 'react';
import ProductStocks from "../productStocks/productStocks";
import Reviews from "../reviews/reviews";
import ProductTitle from "../productTitle/productTitle";
import Price from "../price/price";
import classes from "./productCard.module.css";
import {Button, Card, Input, Slider} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCardAction, countAction} from "../../store/addToCardReduser";
import ButtonGroup from "antd/es/button/button-group";
import {MinusOutlined, PlusOutlined,} from '@ant-design/icons'

const ProductCard = (props) => {
    const dispatch = useDispatch()
    const addProducts = useSelector(state => state.addToCardReduser.addProducts)
    // const count = useSelector(state => state.addToCardReduser.addProducts.title)
    const [addProductCard, setAddProductCard]= useState([{}])
    const [isCount, setSetIsCount]= useState(false)
    const [count, setCount]= useState(1)

    const addToCard=(e)=>{
        e.stopPropagation()
        const producDate = {
            title :props.title,
            price:props.price,
            img:props.img,
            count: count
        }
        dispatch(addToCardAction(producDate))
        setSetIsCount(true)
        localStorage.setItem("producDate", JSON.stringify(addProducts))
    }

    
    const countPlus = ()=>{
        // dispatch(isCountAction(count))
        setCount(count+1)
        dispatch(countAction(Number(count)))
        console.log(addProducts);
    }
    const countMinus = ()=>{
        // dispatch(isCountAction(count))
        if(count>0)setCount(count-1)
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
                    <Button onClick={countMinus}>
                        <MinusOutlined />
                    </Button>
                    <Input 
                        className={classes.input}
                        value={count}
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