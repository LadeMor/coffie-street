import Container from "../../components/container/Container";
import TransparentBorderBox from "../../components/transparent-border-box/TransparentBorderBox";

import "./MainPreview.scss";

import exclude from "../../assets/icons/Exclude.svg";
import main_coffie from "../../assets/images/main-coffie.png";
import rate_star from "../../assets/icons/akar-icons_star.svg";
import white_card_icon from "../../assets/icons/card-icon-white.svg";
import bg_coffie_beans from "../../assets/images/bg-coffie-beans.png";

const MainPreview = () => {
    return(
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
    );
}

export default MainPreview;