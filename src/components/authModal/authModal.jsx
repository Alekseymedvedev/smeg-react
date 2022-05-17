import React, {useEffect} from 'react';
import {Button, Input, Modal} from "antd";
import classes from "../header/header.module.css";
import {useState} from "react";
import axios from "axios";
import AddProducts from "../addProducts/addProducts";

const AuthModal = () => {
    const [auth, setAuth] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [error, setError] = useState('')
    const localStr = localStorage.getItem("token")
    useEffect(() => {
        localStr !== "" ? setAuth(true) : setAuth(false)
    })
    const login = async () => {
        try {
            const loginData = {
                email,
                password,
                returnSecureToken: true
            }
            const response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyR80k6EKfXx42oZvvPrXPDvjxT3rcIZY", loginData)
            localStorage.setItem("token", JSON.stringify(response.data.idToken))

            setAuth(true)
            setIsModalVisible(false);

        } catch (e) {
            localStorage.setItem("token", '')
            setError("Логин или пароль введены не правильно")
        }
    }

    const logut = () => {
        localStorage.setItem("token", '')
        setAuth(false)
    }
    return (
        <>

            {
                auth
                    ?
                    <>
                        <AddProducts/>
                        <Button type="primary">
                            Заказы
                        </Button>
                        <Button type="primary" onClick={logut}>
                            Выйти
                        </Button>
                    </>
                    :
                    <Button type="primary" onClick={() => {
                        setIsModalVisible(true)
                    }}>
                        Войти
                    </Button>
            }


            <Modal width={300} title="Авторизация" cancelText="Назад" visible={isModalVisible} onOk={login} onCancel={() => {
                setIsModalVisible(false)
            }}>
                <Input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    className={classes.input}
                    value={email}
                    maxLength={25}
                />
                <Input
                    onChange={(e) => {
                        setPasword(e.target.value)
                    }}
                    className={classes.input}
                    value={password}
                    maxLength={25}
                />
                <div className="error">{error}</div>
            </Modal>
        </>
    );
};

export default AuthModal;