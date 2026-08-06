import React from "react";
import FoodMenu from "./FoodMenu";

function Restaurant(props) {
    return (
        <>
            <h2>Restaurant</h2>
            <FoodMenu user={props.user} />
        </>
    );
}

export default Restaurant;