import classes from "./addProducts.module.css";
import React, {useState} from 'react';
import {Form, Input, Button, Modal} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import axios from 'axios';

const AddProducts = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [link, setLink] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTtile] = useState('')
    const [price, setPrice] = useState('')
    const [priceDiscount, setPriceDiscount] = useState('')
    const [stock, setStock] = useState('')
    const [form] = Form.useForm()
    
    const addProducts = async () => {

        try {
            const ProductData = {
                link, category, title, price, priceDiscount, stock
            }
            console.log(ProductData);
            const response = await axios.post("https://omoykiry-default-rtdb.europe-west1.firebasedatabase.app/products.json", ProductData)

            console.log(response.data);
            setIsModalVisible(false);

        } catch (e) {
            localStorage.setItem("token", '')
        }
    }
    return (
        <>
            <Button type="primary" onClick={() => {
                setIsModalVisible(true)
            }}>
                Добавить товар
            </Button>
            <Modal
                title="Добавление товара"
                okText="Добавить"
                cancelText="Назад"
                visible={isModalVisible}
                onOk={addProducts}
                onCancel={() => {
                    setIsModalVisible(false)
                }}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Ссылка на изображение">
                        <Input
                            onChange={(e) => {
                                setLink(e.target.value)
                            }}
                            value={link}
                        />
                    </Form.Item>
                    <Form.Item label="category">
                        <Input
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            value={category}
                        />
                    </Form.Item>
                    <Form.Item label="Наименование товара">
                        <Input
                            onChange={(e) => {
                                setTtile(e.target.value)
                            }}
                            value={title}
                        />
                    </Form.Item>
                    <Form.Item label="Цена">
                        <Input
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            value={price}
                        />
                    </Form.Item>
                    <Form.Item label="Цена со скидкой">
                        <Input
                            onChange={(e) => {
                                setPriceDiscount(e.target.value)
                            }}
                            value={priceDiscount}
                        />
                    </Form.Item>
                    <Form.Item label="Наличие">
                        <Input
                            onChange={(e) => {
                                setStock(e.target.value)
                            }}
                            value={stock}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddProducts;