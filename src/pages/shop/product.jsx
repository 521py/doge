import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    return (
        <div className="product">
            <img src={image} />
            <div className="description">
                <h2>{productName}</h2>
                <h3>{price} rub.</h3>
                <div>
                    <button className="addToCartBttn" onClick={() => addToCart(id)}>
                        add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </button>
                </div>

            </div>
        </div >
    );
};