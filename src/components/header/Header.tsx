import { motion } from "framer-motion";

import Container from "../container/Container";

import "./Header.scss";

import main_logo from "../../assets/icons/logo_coffe.svg";
import icon_card from "../../assets/icons/icons_cart.svg";
import search_icon from "../../assets/icons/akar-icons_search.svg";
import { useMemo } from "react";


const Header = () => {

    const linksList = useMemo(() => [
       {label: "About Us", href: "#about-us"},
       {label: "Our Product", href: "#products-menu"},
       {label: "Delivery", href: "#delivery"},
    ], [])

    return(
        <header>
            <Container>
                <nav>
                    <motion.img  initial={{ opacity: 0, translateY:-50 }}
                                animate={{ opacity: 1, translateY:0 }}
                                transition={{
                                  duration: 0.8,
                                  delay: 0.6,
                                  ease: [0, 0.71, 0.2, 2.41]
                                }}
                                src={main_logo} alt="Coffee Street Logo" className="header-main-logo"/>
                    <div className="header-navigation">
                        <div className="header-links">
                            {linksList.map((link, index) => (
                                <motion.a href={link.href}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.8,
                                  delay: 0.3 + (index * 0.2),
                                  ease: [0, 0.71, 0.2, 2.41]
                                }}>{link.label}</motion.a>
                            ))}
                        </div>
                        <motion.div initial={{ opacity: 0, translateX:-50 }}
                                animate={{ opacity: 1, translateX:0 }}
                                transition={{
                                  duration: 0.8,
                                  delay: 0.6,
                                  ease: [0, 0.71, 0.2, 2.41]
                                }} className="header-search-panel">
                            <div className="header-search-panel-input-container">
                                <img src={search_icon} alt="Search"/>
                                <input type="text" placeholder="Cappuccino"/>
                            </div>
                            <img src={icon_card} alt="Shopping Cart"/>
                        </motion.div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;