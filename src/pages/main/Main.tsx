import React, { useMemo } from "react";

import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import TransparentBorderBox from "../../components/transparent-border-box/TransparentBorderBox";
import Product from "../../components/product/Product";

import "./Main.scss";

import exclude from "../../assets/icons/Exclude.svg";
import main_coffie from "../../assets/images/main-coffie.png";
import rate_star from "../../assets/icons/akar-icons_star.svg";
import white_card_icon from "../../assets/icons/card-icon-white.svg";

import bg_coffie_beans from "../../assets/images/bg-coffie-beans.png";

import coffie_item1 from "../../assets/images/coffie-list/coffie1.png";
import coffie_item2 from "../../assets/images/coffie-list/coffie2.png";
import coffie_item3 from "../../assets/images/coffie-list/coffie3.png";

import coffie_cup from "../../assets/images/delivery/coffee-cup 1.svg";
import tap from "../../assets/images/delivery/tap 1.svg";
import food_truck from "../../assets/images/delivery/food-truck 1.svg";

import about_up_cup from "../../assets/images/about-us/About us img.png";
import about_us_exclude from "../../assets/images/about-us/Exclude multiple.svg";


import menu_product1 from "../../assets/images/menu/menu1.png";
import menu_product2 from "../../assets/images/menu/menu2.png";
import menu_product3 from "../../assets/images/menu/menu3.png";
import menu_product4 from "../../assets/images/menu/menu4.png";
import menu_product5 from "../../assets/images/menu/menu5.png";
import menu_product6 from "../../assets/images/menu/menu6.png";


const Main = () => {

    const coffieProductsPreview = useMemo(() => [
        {
            id: 1, url: coffie_item1, title: "Vanilla Latte", rating: 4.8, price: 21
        },
        {
            id: 2, url: coffie_item2, title: "Espresso", rating: 4.8, price: 12
        },
        {
            id: 3, url: coffie_item3, title: "Hazelnut Latte", rating: 4.8, price: 23
        }
    ], [])

    const menuCoffieList = useMemo(() => [
        {
            id: 1,url: menu_product1, title: "Sandwich", rating: 4.8, price: 12, description: "bread with meat and vegetables"
        },
        {
            id: 2,url: menu_product2, title: "Hot Milk", rating: 4.8, price: 12, description: "Hot Milk with less sugar"
        },
        {
            id: 3,url: menu_product3, title: "Coffie Ice Cream", rating: 4.8, price: 12, description: "Coffe with ice cream vanilla"
        },
        {
            id: 4,url: menu_product4, title: "Cappucino", rating: 4.8, price: 12, description: "Hot Cappucino"
        },
        {
            id: 5,url: menu_product5, title: "Moccacinno", rating: 4.8, price: 12, description: "Hot Moccacino"
        },
        {
            id: 6,url: menu_product6, title: "Waffle Ice Cream", rating: 4.8, price: 12, description: "Wafle with Ice cream"
        },
    ], [])  

    return (
        <React.Fragment>
            <Header />
            <section id="main-preview">
                <Container>
                    <div className="main-preview-block">
                        <div className="main-preview-block-text">
                            {/* Fix z-index of this block !!! */}
                            <div>
                                <h1>Enjoy your <span className="coffie-focus">coffee</span> <br /> before your activity</h1>
                                <p>Boost your productivity and build your<br /> mood with a glass of coffee in the morning</p>
                                <div className="main-preview-block-text-buttons">
                                    <button className="order-btn">Order now<img src={white_card_icon} alt="White card" className="btn-white-card-icon" /></button>
                                    <button className="menu-btn">More menu</button>
                                </div>
                            </div>
                            <h1 className="section-title">
                                Popular <span className="underline">now</span>
                                <img src={bg_coffie_beans} alt="Coffie beans" className="bg-bottom-coffie-beans" />
                            </h1>
                        </div>
                        <div className="main-preview-block-image">
                            <img src={exclude} alt="Exclude background" className="main-preview-block-image-exclude" />
                            <img src={main_coffie} alt="Coffie cup" className="main-preview-block-image-coffie-cup" />
                            <TransparentBorderBox className="coffie-label-title" borderRadius="42px">
                                <h4>Cappuccino</h4>
                            </TransparentBorderBox>
                            <TransparentBorderBox className="coffie-label-rate" borderRadius="42px">
                                <h4>4.8</h4>
                                <img src={rate_star} alt="Rating star" />
                            </TransparentBorderBox>
                            <TransparentBorderBox className="coffie-label-count" borderRadius="42px">
                                <h4>18K</h4>
                            </TransparentBorderBox>
                            <img src={bg_coffie_beans} alt="Coffie beans" className="bg-top-coffie-beans" />
                        </div>

                    </div>
                </Container>
            </section>
            <section id="coffie-list">
                <Container>
                    <div className="coffie-list-container">
                        <div className="coffie-list-box">
                            <div className="coffie-list-box-wrapper">
                                {coffieProductsPreview.map((item) => (
                                    <Product product={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="delivery">
                <Container>
                    <h1 className="delivery-title">How to use delivery <span className="delivery-underline">service</span></h1>
                    <div className="delivery-list">
                        <div className="delivery-item">
                            <div className="delivery-item-coffie-tap">
                                <img src={coffie_cup} alt="Goffie cup"/>
                                <img src={tap} alt="Tap hand" className="tap-hand"/>
                            </div>
                            <div className="delivery-item-text">
                                <h2>choose your coffee</h2>
                                <p>there are 20+ coffees for you</p>
                            </div>
                        </div>
                        <div className="delivery-item">
                            <img src={food_truck} alt="Goffie cup"/>
                            <div className="delivery-item-text">
                                <h2>we delivery it to you</h2>
                                <p>Choose delivery service</p>
                            </div>
                        </div>
                        <div className="delivery-item">
                            <img src={coffie_cup} alt="Goffie cup"/>
                            <div className="delivery-item-text">
                                <h2>Enjoy your coffee</h2>
                                <p>Choose delivery service</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="about-us">
                <Container>
                    <div className="about-us-main-wrapper">
                        <div className="about-us-wrapper">
                            <TransparentBorderBox className="about-us-image-wrapper" borderRadius="10px">
                                    <img src={about_up_cup} alt="Coffie cup"/>
                            </TransparentBorderBox>
                            <div className="about-us-info">
                                    <h1>About <span className="underline">us</span></h1>
                                    <h2>We provide quality coffee, and ready to deliver.</h2>
                                    <p>We are a company that makes and distributes delicious drinks.
                                        our main product is made with a secret recipe and available in stores worldwide.</p>
                                    <button>Get your coffie</button>
                            </div>
                        </div>
                        <img src={about_us_exclude} alt="Coffie cups" className="about-us-exclude"/>
                    </div>
                </Container>
            </section>
            <section id="products-menu">
                <Container>
                    <div className="products-menu-wrapper">
                        <h1>Special menu <span className="underline">for you</span></h1>
                        <div className="products-menu-list">
                            {menuCoffieList.map(item => (
                                <Product product={item}/>
                            ))}
                        </div>
                    </div>
                </Container>              
            </section>
            <section id="customers">

            </section>
        </React.Fragment>
    );
}

export default Main;