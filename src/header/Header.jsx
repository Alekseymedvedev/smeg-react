import React, { useState } from 'react';
import classes from "./header.module.css";
import logo from './../logo.svg'
import {useLocation,Link} from "react-router-dom";
import {Button,Input,Modal} from "antd";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../store/authReduser";
import { useParams } from "react-router";

const Header = () => {
    // const dispatch = useDispatch()
    // const auth = useSelector(state => state.authReduser.auth)
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [auth, setAuth] = useState(false)
    const [error, setError] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);

    const params = useLocation();
console.log(params);
    const  login = async ()=>{
        // AIzaSyCyR80k6EKfXx42oZvvPrXPDvjxT3rcIZY
        try{
            const loginData ={
                email,
                password,
                returnSecureToken:true
            }
          const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyR80k6EKfXx42oZvvPrXPDvjxT3rcIZY",loginData)
          
        //   dispatch(authAction({auth:true}))
          localStorage.setItem("token", response.data.idToken)
          
          console.log(response.data);
          console.log(auth);
          setAuth(true)
          setIsModalVisible(false);
        //   if(response.data.idToken){
            //   dispatch(authAction(true))
        //   }
        }catch(e){
            // setError('Логин или пароль введен не правильно')
            localStorage.setItem("token", '')
            // console.log(e);
        }
        
        
     
    }
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.inner}>
            <img src={logo} alt=""/>
                <div className={classes.btnInner}>
                    <Button type="primary" onClick={()=>{setIsModalVisible(true)}}>
                        Добавить товар
                    </Button>
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