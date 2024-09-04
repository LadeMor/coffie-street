import React from "react";

import Container from "../../components/container/Container";
import Header from "../../components/header/Header";

import "./Main.scss";

import exclude from "../../assets/icons/Exclude.svg";
import main_coffie from "../../assets/images/main-coffie.png";
import rate_star from "../../assets/icons/akar-icons_star.svg";
import white_card_icon from "../../assets/icons/card-icon-white.svg";

import bg_coffie_beans from "../../assets/images/bg-coffie-beans.png";


const Main = () => {
    return(
        <React.Fragment>
            <Header/>
            <section id="main-preview">
                <Container>
                    <div className="main-preview-block">
                        <div className="main-preview-block-text">
                            {/* Fix z-index of this block !!! */}
                            <h1>Enjoy your <span className="coffie-focus">coffee</span> <br/> before your activity</h1>
                            <p>Boost your productivity and build your<br/> mood with a glass of coffee in the morning</p>
                            <div className="main-preview-block-text-buttons">
                                <button className="order-btn">Order now<img src={white_card_icon} className="btn-white-card-icon"/></button>
                                <button className="menu-btn">More menu</button>
                            </div>
                        </div>
                        <div className="main-preview-block-image">
                            <img src={exclude} alt="Exclude background" className="main-preview-block-image-exclude"/>
                            <img src={main_coffie} alt="Coffie cup" className="main-preview-block-image-coffie-cup"/>
                            <div className="coffie-label-border coffie-label-title">
                                <h4>Cappuccino</h4>
                                <div className="border"></div>
                            </div>
                            <div className="coffie-label-border coffie-label-rate">
                                <h4>4.8</h4>
                                <img src={rate_star}/>
                                <div className="border"></div>
                            </div>
                            <div className="coffie-label-border coffie-label-count">
                                <h4>18K</h4>
                                <div className="border"></div>
                            </div>
                            <img src={bg_coffie_beans} className="bg-top-coffie-beans"/>
                        </div>
                        
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Main;