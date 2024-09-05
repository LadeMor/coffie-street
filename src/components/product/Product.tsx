import React from "react";
import "./Product.scss";

import TransparentBorderBox from "../transparent-border-box/TransparentBorderBox";

import rate_star from "../../assets/icons/akar-icons_star.svg";
import white_card_icon from "../../assets/icons/card-icon-white.svg";

interface ProductItem {
    id: number,
    url: string,
    title: string,
    rating: number,
    price: number,
    description?: string;
}

interface ProductProps {
    product: ProductItem
}

const Product: React.FC<ProductProps> = ({ product }) => {

    return (
        
            <div className="coffie-item" key={product.id}>
                        <TransparentBorderBox className="coffie-item-border-box" borderRadius="12px">
                            <div className="coffie-item-preview">
                                <img src={product.url} alt={product.title} />
                                <TransparentBorderBox className="coffie-item-preview-rate" borderRadius="42px">
                                    <h4>{product.rating}</h4>
                                    <img src={rate_star} alt="Rating star" />
                                </TransparentBorderBox>
                            </div>
                            <div className="coffie-item-text">
                                <div className="coffie-item-text-title">
                                    <h1>{product.title}</h1>
                                    {/* <div className="coffie-card-buttons-wrapper">
                                        <button>Hot</button>
                                        <button>Cold</button>
                                    </div> */}

                                    {product.description ?
                                        <p className="coffie-card-description">bread with meat and vegetables</p>
                                        :
                                        <div className="coffie-card-buttons-wrapper">
                                            <button>Hot</button>
                                            <button>Cold</button>
                                        </div>
                                    }
                                </div>
                                <div className="coffie-item-text-price">
                                    <h1>{product.price}K</h1>
                                    <img src={white_card_icon} alt="White card" className="coffie-card-icon" />
                                </div>
                            </div>
                        </TransparentBorderBox>
                    </div>
    
    );
}

export default Product;