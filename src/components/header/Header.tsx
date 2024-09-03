import Container from "../container/Container";

import "./Header.scss";

import main_logo from "../../assets/icons/logo_coffe.svg";
import icon_card from "../../assets/icons/icons_cart.svg";


const Header = () => {
    return(
        <header>
            <Container>
                <nav>
                    <img src={main_logo} className="header-main-logo"/>
                    <div className="header-links">
                        <a>About Us</a>
                        <a>Our Product</a>
                        <a>Delivery</a>
                    </div>
                    <div className="header-search-panel">
                        <input type="text"/>
                        <img src={icon_card}/>
                    </div>
                </nav>
            </Container>
        </header>
    );
}

export default Header;