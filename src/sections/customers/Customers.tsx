import Container from "../../components/container/Container";

import "./Customers.scss";

import exclude_2 from "../../assets/images/customers/Exclude (2).svg";
import person1 from "../../assets/images/customers/people/person1.jpg";
import person2 from "../../assets/images/customers/people/person2.jpg";
import person3 from "../../assets/images/customers/people/person3.jpg";

const Customers = () => {
    return(
        <section id="customers">
                <Container>
                    <div className="cutomers-main-wrapper">
                        <div className="customers-text">
                            <h1>What they say about us</h1>
                            <p>We always provide the best service<br/> and always maintain the quality of<br/> coffee</p>
                        </div>
                        <div className="customers-slider">
                            <div className="customer-slide-items">
                                <div className="customer-slide">
                                    <div className="customer-slide-image">
                                        <img src={person1} alt="Person"/>
                                        <div className="slide-image-border"></div>
                                    </div>
                                    <div className="customer-slide-text">
                                        <div className="customer-slide-text-content">
                                            <h2>Naura</h2>
                                            <p>I really love the cappucino, the coffee was very smooth</p>
                                        </div>
                                        <div className="slide-image-border custom-border-radius"></div>
                                    </div>
                                </div>
                                <div className="customer-slide non-mobile-medium">
                                    <div className="customer-slide-image">
                                        <img src={person2} alt="Person"/>
                                        <div className="slide-image-border"></div>
                                    </div>
                                    <div className="customer-slide-text">
                                        <div className="customer-slide-text-content">
                                            <h2>John</h2>
                                            <p>this coffee shop is very<br/> convenient</p>
                                        </div>
                                        <div className="slide-image-border custom-border-radius"></div>
                                    </div>
                                </div>
                                <div className="customer-slide non-mobile non-mobile-small">
                                    <div className="customer-slide-image">
                                        <img src={person3} alt="Person"/>
                                        <div className="slide-image-border"></div>
                                    </div>
                                    <div className="customer-slide-text">
                                        <div className="customer-slide-text-content">
                                            <h2>Azura</h2>
                                            <p>the coffee menu here is<br/> very much</p>
                                        </div>
                                        <div className="slide-image-border custom-border-radius"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-dots">
                                <div className="slider-dot active-dot"></div>
                                <div className="slider-dot"></div>
                                <div className="slider-dot"></div>
                            </div>
                        </div>
                        <div className="background-plain">
                            <div className="coffie-exclude-image">
                                <img src={exclude_2} alt="Coffie cups"/>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </section>
    );
}

export default Customers;