import { useMemo, useRef } from "react";
import { useInView, motion } from "framer-motion";

import Container from "../../components/container/Container";
import Product from "../../components/product/Product";

import "./CoffieList.scss";

import coffie_item1 from "../../assets/images/coffie-list/coffie1.png";
import coffie_item2 from "../../assets/images/coffie-list/coffie2.png";
import coffie_item3 from "../../assets/images/coffie-list/coffie3.png";

const CoffieList = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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

    return (
        <section id="coffie-list" ref={ref}>
            <Container>
                <div className="coffie-list-container">
                    <div className="coffie-list-box">
                        <div className="coffie-list-box-wrapper">
                            {coffieProductsPreview.map((item, index) => (
                                <Product product={item} style={{
                                    transform: isInView ? "none" : "translateY(100px)",
                                    opacity: isInView ? 1 : 0,
    
                                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.5 + (index * 0.2)}s`
                                }} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default CoffieList;