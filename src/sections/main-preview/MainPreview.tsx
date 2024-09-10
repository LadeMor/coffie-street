import { useEffect, useState } from "react";
import { useMotionValue, motion, useTransform, useSpring } from "framer-motion";

import Container from "../../components/container/Container";
import TransparentBorderBox from "../../components/transparent-border-box/TransparentBorderBox";

import "./MainPreview.scss";

import exclude from "../../assets/icons/Exclude.svg";
import main_coffie from "../../assets/images/main-coffie.png";
import rate_star from "../../assets/icons/akar-icons_star.svg";
import white_card_icon from "../../assets/icons/card-icon-white.svg";
import bg_coffie_beans from "../../assets/images/bg-coffie-beans.png";


const MainPreview = () => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const smoothX = useSpring(x, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const handleOnMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const {clientX, clientY} = event;

        x.set(clientX - windowSize.width / 2);
        y.set(clientY - windowSize.height / 2);

    }

    const xCoffieBeans = useTransform(smoothX, [-windowSize.width / 2, windowSize.width / 2], [-50, 50]);
    const yCoffieBeans = useTransform(smoothY, [-windowSize.height / 2, windowSize.height / 2], [-50, 50]);

    const xCoffieBeans2 = useTransform(smoothX, [-windowSize.width / 2, windowSize.width / 2], [50, -50]);
    const yCoffieBeans2 = useTransform(smoothY, [-windowSize.height / 2, windowSize.height / 2], [50, -50]);

    const xCoffieCup = useTransform(smoothX, [-windowSize.width / 2, windowSize.width / 2], [25, -25]);
    const yCoffieCup = useTransform(smoothY, [-windowSize.height / 2, windowSize.height / 2], [25, -25]);

    return (
        <section id="main-preview" onMouseOver={handleOnMouseOver}>
            <Container >
                <div className="main-preview-block">
                    <div className="main-preview-block-text">
                        <motion.div  initial={{ opacity: 0, translateX: -300}}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{
                                  duration: 0.8,
                                  delay: 0.3,
                                  ease: [0, 0.71, 0.2, 1.41]
                                }}>
                            <h1>Enjoy your <span className="coffie-focus">coffee</span> <br /> before your activity</h1>
                            <p>Boost your productivity and build your<br /> mood with a glass of coffee in the morning</p>
                            <div className="main-preview-block-text-buttons">
                                <button className="order-btn">Order now<img src={white_card_icon} alt="White card" className="btn-white-card-icon" /></button>
                                <button className="menu-btn">More menu</button>
                            </div>
                        </motion.div>
                        <h1 className="section-title">
                            Popular <span className="underline">now</span>
                            <motion.img src={bg_coffie_beans} style={{x: xCoffieBeans2, y: yCoffieBeans2}} alt="Coffie beans" className="bg-bottom-coffie-beans" />
                        </h1>
                    </div>
                    <motion.div style={{x: xCoffieCup, y: yCoffieCup}} initial={{ opacity: 0, translateX: 300}}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{
                                  duration: 1,
                                  delay: 0.3,
                                  ease: [0, 0.71, 0.2, 1.41]
                                }} className="main-preview-block-image">
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

                    </motion.div>
                    <motion.img style={{x: xCoffieBeans, y: yCoffieBeans}} src={bg_coffie_beans} alt="Coffie beans" className="bg-top-coffie-beans" />
                </div>


            </Container>
        </section>
    );
}

export default MainPreview;