import Container from "../container/Container";

import "./Header.scss";

import main_logo from "../../assets/icons/logo_coffe.svg";
import icon_card from "../../assets/icons/icons_cart.svg";
import search_icon from "../../assets/icons/akar-icons_search.svg";


const Header = () => {
    return(
        <header>
            <Container>
                <nav>
                    <img src={main_logo} alt="Coffee Street Logo" className="header-main-logo"/>
                    <div className="header-navigation">
                        <div className="header-links">
                            <a>About Us</a>
                            <a>Our Product</a>
                            <a>Delivery</a>
                        </div>
                        <div className="header-search-panel">
                            <div className="header-search-panel-input-container">
                                <img src={search_icon} alt="Search"/>
                                <input type="text" placeholder="Cappuccino"/>
                            </div>
                            <img src={icon_card} alt="Shopping Cart"/>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;