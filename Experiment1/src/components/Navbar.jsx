import useUser from "../hooks/useUser";

function Navbar() {

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
            }}
        >
            <div>
                <h3>Welcome, {user.name}</h3>
                <p>Location: {user.location}</p>
            </div>

            <h3>Cart: {cartCount} items</h3>
        </div>
    );
}

export default Navbar;