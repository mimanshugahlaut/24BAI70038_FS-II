import React, { useState } from "react";
import UserInfo from "./UserInfo";

function FoodMenu(props) {
    const [cartCount, setCartCount] = useState(0);

    return (
        <>
            <UserInfo user={props.user} />

            <h2>Menu</h2>
            <h3>Pizza @ Rs. 299</h3>
            <button onClick={() => setCartCount(prev => prev + 1)}>
                Add to Cart
            </button>

            <br /><br />

            <h3>Burger @ Rs. 149</h3>
            <button onClick={() => setCartCount(prev => prev + 1)}>
                Add to Cart
            </button>

            <br /><br />

            <h3>Pasta @ Rs. 199</h3>
            <button onClick={() => setCartCount(prev => prev + 1)}>
                Add to Cart
            </button>

            <h2>Cart Items: {cartCount}</h2>
        </>
    );
}

export default FoodMenu;