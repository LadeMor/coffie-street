import React, { useEffect } from "react";
import { useScroll, motion } from "framer-motion";

import Header from "../../components/header/Header";

// Sections
import MainPreview from "../../sections/main-preview/MainPreview";
import CoffieList from "../../sections/coffie-list/CoffieList";
import Delivery from "../../sections/delivery/Delivery";
import AboutUs from "../../sections/about-us/AboutUs";
import ProductsMenu from "../../sections/products-menu/ProductsMenu";
import Customers from "../../sections/customers/Customers";
import Discount from "../../sections/discount/Discount";

import "./Main.scss";

const Main = () => {


    return (
        <React.Fragment>
            <Header />
            <MainPreview />
            <CoffieList />
            <Delivery />
            <AboutUs />
            <ProductsMenu />
            <Customers />
            <Discount />
        </React.Fragment>
    );
}

export default Main;