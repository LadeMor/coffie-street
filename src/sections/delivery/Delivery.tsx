import { useMemo, useRef } from "react";
import { useInView, motion } from "framer-motion";

import Container from "../../components/container/Container";

import "./Delivery.scss";

import coffie_cup from "../../assets/images/delivery/coffee-cup 1.svg";
import tap from "../../assets/images/delivery/tap 1.svg";
import food_truck from "../../assets/images/delivery/food-truck 1.svg";



const Delivery = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const deliveryIconsList = useMemo(() => [
        {
            hasTap: true,
            label: "choose your coffee",
            description: "there are 20+ coffees for you",
            url: coffie_cup
        },
        {
            hasTap: false,
            label: "we delivery it to you",
            description: "Choose delivery service",
            url: food_truck
        },
        {
            hasTap: false,
            label: "Enjoy your coffee",
            description: "Choose delivery service",
            url: coffie_cup
        },
    ], [])

    return (
        <section id="delivery">
            <Container>
                <h1 className="delivery-title">How to use delivery <span className="delivery-underline">service</span></h1>
                <div className="delivery-list" ref={ref}>
                    {
                        deliveryIconsList.map((item, index) => (
                            <motion.div key={index} className="delivery-item" style={{
                                transform: isInView ? "none" : "translateY(100px)",
                                opacity: isInView ? 1 : 0,

                                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5 + (index * 0.2)}s`
                            }}>
                                {
                                    item.hasTap ?
                                    <div className="delivery-item-coffie-tap">
                                        <img src={coffie_cup} alt="Goffie cup" />
                                        <img src={tap} alt="Tap hand" className="tap-hand" />
                                    </div>
                                    :
                                    <img src={item.url} alt="Goffie cup"/>
                                }
                                <div className="delivery-item-text">
                                    <h2>{item.label}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className="delivery-list-mobile-medium">
                    <div className="mobile-medium-row">
                        <div className="delivery-item">
                            <div className="delivery-item-coffie-tap">
                                <img src={coffie_cup} alt="Goffie cup" />
                                <img src={tap} alt="Tap hand" className="tap-hand" />
                            </div>
                            <div className="delivery-item-text">
                                <h2>choose your coffee</h2>
                                <p>there are 20+ coffees for you</p>
                            </div>
                        </div>
                        <div className="delivery-item">
                            <img src={food_truck} alt="Goffie cup" />
                            <div className="delivery-item-text">
                                <h2>we delivery it to you</h2>
                                <p>Choose delivery service</p>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <img src={coffie_cup} alt="Goffie cup" />
                        <div className="delivery-item-text">
                            <h2>Enjoy your coffee</h2>
                            <p>Choose delivery service</p>
                        </div>
                    </div>
                </div>
                <div className="delivery-list-mobile-small">
                    <div className="delivery-item">
                        <div className="delivery-item-coffie-tap">
                            <img src={coffie_cup} alt="Goffie cup" />
                            <img src={tap} alt="Tap hand" className="tap-hand" />
                        </div>
                        <div className="delivery-item-text">
                            <h2>choose your coffee</h2>
                            <p>there are 20+ coffees for you</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <img src={food_truck} alt="Goffie cup" />
                        <div className="delivery-item-text">
                            <h2>we delivery it to you</h2>
                            <p>Choose delivery service</p>
                        </div>
                    </div>
                    <div className="delivery-item">
                        <img src={coffie_cup} alt="Goffie cup" />
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