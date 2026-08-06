import React from "react";
import Restaurant from "./Restaurant";

function Home(props) {
    return (
        <div>
            <Restaurant user={props.user} />
        </div>
    );
}

export default Home;