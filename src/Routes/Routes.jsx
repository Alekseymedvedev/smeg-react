import Home from "../pages/home/home";
import Product from "../pages/product/product";
import ErrorPage from "../pages/404/404";
import Card from "../pages/card/card";


export  const routes=[
    {path: "/", component:<Home/>},
    // {path: "catalog/", component:<Catalog/>},
    {path: "product/", component:<Product/>},
    {path: "card/", component:<Card/>},
    {path: "*", component:<ErrorPage/>}
]