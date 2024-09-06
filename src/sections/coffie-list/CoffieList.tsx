import { useMemo } from "react";

import Container from "../../components/container/Container";
import Product from "../../components/product/Product";

import "./CoffieList.scss";

import coffie_item1 from "../../assets/images/coffie-list/coffie1.png";
import coffie_item2 from "../../assets/images/coffie-list/coffie2.png";
import coffie_item3 from "../../assets/images/coffie-list/coffie3.png";

const CoffieList = () => {

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
        <section id="coffie-list">
            <Container>
                <div className="coffie-list-container">
                    <div className="coffie-list-box">
                        <div className="coffie-list-box-wrapper">
                            {coffieProductsPreview.map((item) => (
                                <Product product={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default CoffieList;