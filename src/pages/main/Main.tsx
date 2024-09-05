import React, { useMemo } from "react";

import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import TransparentBorderBox from "../../components/transparent-border-box/TransparentBorderBox";

import "./Main.scss";

import exclude from "../../assets/icons/Exclude.svg";
import main_coffie from "../../assets/images/main-coffie.png";
import rate_star from "../../assets/icons/akar-icons_star.svg";
import white_card_icon from "../../assets/icons/card-icon-white.svg";

import bg_coffie_beans from "../../assets/images/bg-coffie-beans.png";


import coffie_item1 from "../../assets/images/coffie-list/coffie1.png";
import coffie_item2 from "../../assets/images/coffie-list/coffie2.png";
import coffie_item3 from "../../assets/images/coffie-list/coffie3.png";


const Main = () => {

    const coffieProductsPreview = useMemo(() => [
        {
            url: coffie_item1,
            title: "Vanilla Latte",
            rating: 4.8,
            price: 21
        },
        {
            url: coffie_item2,
            title: "Espresso",
            rating: 4.8,
            price: 12
        },
        {
            url: coffie_item3,
            title: "Hazelnut Latte",
            rating: 4.8,
            price: 23
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
                                    <button className="order-btn">Order now<img src={white_card_icon} className="btn-white-card-icon" /></button>
                                    <button className="menu-btn">More menu</button>
                                </div>
                            </div>
                            <h1 className="section-title">
                                Popular <span className="underline">now</span>
                                <img src={bg_coffie_beans} className="bg-bottom-coffie-beans" />
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
                                <img src={rate_star} />
                            </TransparentBorderBox>
                            <TransparentBorderBox className="coffie-label-count" borderRadius="42px">
                                <h4>18K</h4>
                            </TransparentBorderBox>
                            <img src={bg_coffie_beans} className="bg-top-coffie-beans" />
                        </div>

                    </div>
                </Container>
            </section>
            <section id="coffie-list">
                <Container>
                    <div className="coffie-list-container">
                        <div className="coffie-list-box">
                            <div className="coffie-list-box-wrapper">
                                {
                                    coffieProductsPreview.map((item, index) => (
                                        <div className="coffie-item" key={index}>
                                            <TransparentBorderBox className="coffie-item-border-box" borderRadius="12px">
                                                <div className="coffie-item-preview">
                                                    <img src={item.url} />
                                                    <TransparentBorderBox className="coffie-item-preview-rate" borderRadius="42px">
                                                        <h4>{item.rating}</h4>
                                                        <img src={rate_star} />
                                                    </TransparentBorderBox>
                                                </div>
                                                <div className="coffie-item-text">
                                                    <div className="coffie-item-text-title">
                                                        <h1>{item.title}</h1>
                                                        <div className="coffie-card-buttons-wrapper">
                                                            <button>Hot</button>
                                                            <button>Cold</button>
                                                        </div>
                                                    </div>
                                                    <div className="coffie-item-text-price">
                                                        <h1>{item.price}K</h1>
                                                        <img src={white_card_icon} className="coffie-card-icon" />
                                                    </div>
                                                </div>
                                            </TransparentBorderBox>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section id="delivery">

            </section>
        </React.Fragment>
    );
}

export default Main;