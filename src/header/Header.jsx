import React, { useState } from 'react';
import classes from "./header.module.css";
import logo from './../logo.svg'
import {useLocation,Link} from "react-router-dom";
import {Form,Button,Input,Modal} from "antd";
import axios from 'axios';
import AddProducts from "../components/addProducts/addProducts";

const Header = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [auth, setAuth] = useState(false)
    const [error, setError] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalProductVisible, setIsModalProductVisible] = useState(false);
    
    const  login = async ()=>{
        try{
            const loginData ={
                email,
                password,
                returnSecureToken:true
            }
          const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyR80k6EKfXx42oZvvPrXPDvjxT3rcIZY",loginData)
          
          localStorage.setItem("token", response.data.idToken)
          
          console.log(response.data);
          console.log(auth);
          setAuth(true)
          setIsModalVisible(false);
    
        }catch(e){
            localStorage.setItem("token", '')
        }
    }
 
    return (
        <header className={classes.header}>
            
            <div className="container">
                <div className={classes.inner}>
            <img src={logo} alt=""/>
                <div className={classes.btnInner}>
                    
                    <AddProducts isModalProductVisible={isModalProductVisible}/>
                    <Button type="primary" onClick={()=>{setIsModalVisible(true)}}>
                        Заказы
                    </Button>
                     
                    {
                        auth 
                        ? 
                        <Button 
                    onClick={()=>{setAuth(false)}}
                    type="primary"
                >
                    Выйти
                    </Button>
                        : 
                        <Button type="primary" onClick={()=>{setIsModalVisible(true)}}>
                        Войти
                    </Button>
                    }
                    
         
                <Modal title="Авторизация" cancelText="Назад" visible={isModalVisible} onOk={login} onCancel={()=>{setIsModalVisible(false)}}>
                                <Input 
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    className={classes.input}
                                    value={email}
                                    maxLength={25}
                                />
                                <Input 
                                onChange={(e)=>{setPasword(e.target.value)}}
                                    className={classes.input}
                                    value={password}
                                    maxLength={25}
                                />
                </Modal>
       
            <Link to="card" className="card-type-and-title">
                <Button type="primary">
                    Корзина
                </Button>
            </Link>
            </div>
            </div>
            </div>
        </header>
    );
};

export default Header;