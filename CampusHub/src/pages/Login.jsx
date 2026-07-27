import { useState } from "react";
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { validateLogin } from "../utils/validation";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate();

    const [loggedInUser, setLoggedInUser] = useLocalStorage("user", null);

    const handleLogin = () => {

        if (!validateLogin(email, password)) {
            alert("Please fill all fields");
            return;
        }
        
        const user = {
            name:"Mimanshu",
            email
        };

        setLoggedInUser(user);

        navigate("/dashboard");
    }

    return (
        <div>
            <h1>CampusHub Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/><br/>

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;