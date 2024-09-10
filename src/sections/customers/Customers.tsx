import { useMemo, useRef, useState, useEffect } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";

import Container from "../../components/container/Container";

import "./Customers.scss";

import exclude_2 from "../../assets/images/customers/Exclude (2).svg";
import person1 from "../../assets/images/customers/people/person1.jpg";
import person2 from "../../assets/images/customers/people/person2.jpg";
import person3 from "../../assets/images/customers/people/person3.jpg";
import person4 from "../../assets/images/customers/people/person4.jpg";
import person5 from "../../assets/images/customers/people/person5.jpg";

interface CustomerObject {
    url: string,
    name: string,
    review: string
}

const Customers = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const customersList = useMemo(() => [
        { url: person1, name: "Naura", review: "I really love the cappucino, the coffee was very smooth" },
        { url: person2, name: "John", review: "this coffee shop is very<br/> convenient" },
        { url: person3, name: "Azura", review: "the coffee menu here is<br/> very much" },
        { url: person4, name: "Carl", review: "I really love the cappucino, the coffee was very smooth" },
        { url: person5, name: "Anna", review: "I really love the cappucino, the coffee was very smooth" },
        { url: person2, name: "Bob", review: "I really love the cappucino, the coffee was very smooth" },
        { url: person3, name: "Maria", review: "I really love the cappucino, the coffee was very smooth" },
        { url: person1, name: "Jack", review: "I really love the cappucino, the coffee was very smooth" },
        { url: person5, name: "Iona", review: "I really love the cappucino, the coffee was very smooth" },
    ], [])

    const chunkArray = (array: any[], size: number) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    const chunckedArray = chunkArray(customersList, 3);

    const onSliderDotClick = (dotIndex: number) => {
        setCurrentSlide(dotIndex);
    }

    return (
        <section id="customers">
            <Container>
                <div className="cutomers-main-wrapper" ref={ref}>
                    <motion.div style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,

                        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5}s`
                    }} className="customers-text">
                        <h1>What they say about us</h1>
                        <p>We always provide the best service<br /> and always maintain the quality of<br /> coffee</p>
                    </motion.div>
                    <motion.div style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        opacity: isInView ? 1 : 0,

                        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5}s`
                    }} className="customers-slider">
                        <div className="customer-slide-items" style={{ position: "static", opacity: 0 }}>
                            <div className="customer-slide">
                                <div className="customer-slide-image">
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
                                    <div className="slide-image-border"></div>
                                </div>
                                <div className="customer-slide-text">
                                    <div className="customer-slide-text-content">
                                        <h2>John</h2>
                                        <p>this coffee shop is very<br /> convenient</p>
                                    </div>
                                    <div className="slide-image-border custom-border-radius"></div>
                                </div>
                            </div>
                            <div className="customer-slide non-mobile non-mobile-small">
                                <div className="customer-slide-image">
                                    <div className="slide-image-border"></div>
                                </div>
                                <div className="customer-slide-text">
                                    <div className="customer-slide-text-content">
                                        <h2>Azura</h2>
                                        <p>the coffee menu here is<br /> very much</p>
                                    </div>
                                    <div className="slide-image-border custom-border-radius"></div>
                                </div>
                            </div>
                        </div>
                        {/* /////////////////////////////////////////// */}
                        {chunckedArray.map((chunk, index) => (
                            <AnimatePresence>
                                {currentSlide === index ?
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="customer-slide-items">
                                        {chunk.map((item, index) => (
                                            <div className="customer-slide">
                                                <div className="customer-slide-image">
                                                    <img src={item.url} alt="Person" />
                                                    <div className="slide-image-border"></div>
                                                </div>
                                                <div className="customer-slide-text">
                                                    <div className="customer-slide-text-content">
                                                        <h2>{item.name}</h2>
                                                        <p>{item.review}</p>
                                                    </div>
                                                    <div className="slide-image-border custom-border-radius"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                    : null}
                            </AnimatePresence>
                        ))}
                        <div className="slider-dots">
                            {chunckedArray.map((item, index) => (
                                <div
                                onClick={() => onSliderDotClick(index)}
                                 className={`slider-dot ${currentSlide === index ? "active-dot" : null}`}></div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="background-plain">
                        <div className="coffie-exclude-image">
                            <img src={exclude_2} alt="Coffie cups" />
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Customers;