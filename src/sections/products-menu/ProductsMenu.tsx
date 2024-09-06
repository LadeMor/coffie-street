import { useMemo } from "react";

import Container from "../../components/container/Container";
import Product from "../../components/product/Product";

import "./ProductsMenu.scss";

import menu_product1 from "../../assets/images/menu/menu1.png";
import menu_product2 from "../../assets/images/menu/menu2.png";
import menu_product3 from "../../assets/images/menu/menu3.png";
import menu_product4 from "../../assets/images/menu/menu4.png";
import menu_product5 from "../../assets/images/menu/menu5.png";
import menu_product6 from "../../assets/images/menu/menu6.png";

const ProductsMenu = () => {

    const menuCoffieList = useMemo(() => [
        {
            id: 1,url: menu_product1, title: "Sandwich", rating: 4.8, price: 12, description: "bread with meat and vegetables"
        },
        {
            id: 2,url: menu_product2, title: "Hot Milk", rating: 4.8, price: 12, description: "Hot Milk with less sugar"
        },
        {
            id: 3,url: menu_product3, title: "Coffie Ice Cream", rating: 4.8, price: 12, description: "Coffe with ice cream vanilla"
        },
        {
            id: 4,url: menu_product4, title: "Cappucino", rating: 4.8, price: 12, description: "Hot Cappucino"
        },
        {
            id: 5,url: menu_product5, title: "Moccacinno", rating: 4.8, price: 12, description: "Hot Moccacino"
        },
        {
            id: 6,url: menu_product6, title: "Waffle Ice Cream", rating: 4.8, price: 12, description: "Wafle with Ice cream"
        },
    ], [])  

    return( 
        <section id="products-menu">
                <Container>
                    <div className="products-menu-wrapper">
                        <h1>Special menu <span className="underline">for you</span></h1>
                        <div className="products-menu-list">
                            {menuCoffieList.map(item => (
                                <Product product={item}/>
                            ))}
                        </div>
                    </div>
                </Container>              
            </section>
    );
}

export default ProductsMenu;