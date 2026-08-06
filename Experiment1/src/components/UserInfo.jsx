import React from "react";

function UserInfo(props) {
    return (
        <>
            <h2>Welcome {props.user.name}</h2>
            <h3>Email: {props.user.email}</h3>
            <h3>Location: {props.user.location}</h3>
        </>
    );
}

export default UserInfo;