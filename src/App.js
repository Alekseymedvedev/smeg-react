import 'antd/dist/antd.css'
import './App.css';
import Header from "./header/Header";
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import {routes} from "./Routes/Routes";
import React from "react";
import {Layout, Slider} from "antd";
import Demo from "./header/Header";
import {Footer} from "antd/es/layout/layout";
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Header/>

                <Routes>
                    {
                        routes.map((route) =>
                            <Route key={route.path} path={route.path} element={route.component} />
                        )
                    }
                </Routes>
                <Footer>Footer</Footer>
            </Layout>

        </BrowserRouter>
    );
}

export default App;
