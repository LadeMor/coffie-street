import Container from "../../components/container/Container";

import "./Delivery.scss";

import coffie_cup from "../../assets/images/delivery/coffee-cup 1.svg";
import tap from "../../assets/images/delivery/tap 1.svg";
import food_truck from "../../assets/images/delivery/food-truck 1.svg";

const Delivery = () => {
    return(
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
                    <div className="delivery-list-mobile-medium">
                        <div className="mobile-medium-row">
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
                        </div>
                        <div className="delivery-item">
                            <img src={coffie_cup} alt="Goffie cup"/>
                            <div className="delivery-item-text">
                                <h2>Enjoy your coffee</h2>
                                <p>Choose delivery service</p>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-list-mobile-small">
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
    );
}

export default Delivery;