import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import Container from "../../components/container/Container";
import TransparentBorderBox from "../../components/transparent-border-box/TransparentBorderBox";

import "./AboutUs.scss";

import about_up_cup from "../../assets/images/about-us/About us img.png";
import about_us_exclude from "../../assets/images/about-us/Exclude multiple.svg";



const AboutUs = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <section id="about-us">
                <Container>
                    <div className="about-us-main-wrapper" ref={ref}>
                        <div className="about-us-wrapper">
                            <TransparentBorderBox className="about-us-image-wrapper" borderRadius="10px" style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,

                                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5}s`
                            }}>
                                    <img src={about_up_cup} alt="Coffie cup"/>
                            </TransparentBorderBox>
                            <div className="about-us-info" style={{
                                transform: isInView ? "none" : "translateY(20px)",
                                opacity: isInView ? 1 : 0,

                                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5}s`
                            }}>
                                    <h1>About <span className="underline">us</span></h1>
                                    <h2>We provide quality coffee, and ready to deliver.</h2>
                                    <p>We are a company that makes and distributes delicious drinks.
                                        our main product is made with a secret recipe and available in stores worldwide.</p>
                                    <button>Get your coffie</button>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-exclude-wrapper">
                            <img src={about_us_exclude} alt="Coffie cups" className="about-us-exclude"/>
                    </div>
                </Container>
            </section>
    );
}

export default AboutUs;