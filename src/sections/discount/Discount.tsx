import Container from "../../components/container/Container";

import "./Discount.scss";

const Discount = () => {
    return(
        <section id="discount">
                <Container>
                    <div className="discount-main-wrapper">
                        <div className="discount-block">
                            <div className="discount-block-content">
                                <h1>Subscribe to get 50% discount price</h1>
                                <div className="discount-block-input">
                                    <input type="text" placeholder="Email address"/>
                                    <button>Order now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
    );
}

export default Discount;