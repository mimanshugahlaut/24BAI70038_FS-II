import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useLocalStorage from "../hooks/useLocalStorage";

function Profile(){
    const [user] = useLocalStorage("user", null);

    return (
        <>
        <Navbar/>
        <div style={{display: "flex"}}>
            <Sidebar/>

            <div style={{padding: "20px"}}>
                <h1>Profile</h1>
                <p><strong>Name: </strong> {user?.name}</p>
                <p><strong>Email: </strong> {user?.email}</p>
            </div>
        </div>
        </>
    );
}
export default Profile;