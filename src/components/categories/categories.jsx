import React from 'react';
import Category from "./category/category";
import {useEffect, useState} from "react";
import axios from "axios";

const Categories = (props) => {
    const [category, setCategory] = useState([
        {category: '', categoryTitle: '', img: '', text: '', }

    ])
    const fetchPost = async () => {
        const response = await axios.get('https://omoykiry-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
        setCategory(response.data)
    }

    useEffect(() => {
        fetchPost()

    }, [])
    return (
        <div className="categories _vr-m-s">
            <div className="container">
                <div className="categories__slider-wrap">
                    <div className="js-categories-slider">
                        <ul className=" categories__items-list">
                            {
                                category.map((cat) =>
                                    <Category
                                        key={cat.categoryTitle}
                                        category={cat.category}
                                        categoryTitle={cat.categoryTitle}
                                        img={cat.img}
                                        text={cat.text}
                                    />
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="swiper-pagination js-categories-pagintaion"></div>
            </div>
        </div>
    );
};

export default Categories;