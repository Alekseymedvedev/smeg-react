import React from 'react';
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <section className="alert-404">
            <div className="container">
                <div className="alert-404__wrap">
                    <h1>404</h1>
                    <h2>Страница не найдена</h2>
                    <p>Страница, которую вы запрашиваете, <span
                        className="no-wrap">была удалена или не существует</span>
                    </p>
                    <Link to='/' className="btn btn--shiny btn--wide">На главную</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage ;