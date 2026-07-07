import { useState } from "react";
import "../styles/login.css";
import { useAuth } from "../context/AuthContext";
import { login } from "../services/authService";
import { APP_NAME } from "../utils/constants";

import { useNavigate } from "react-router-dom";



function Login() {

    
    const auth = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [remember, setRemember] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    function handleSubmit(e) {

    e.preventDefault();

    setError("");

    if (!email.trim()) {
        setError("Email is required");
        return;
    }

    if (!password.trim()) {
        setError("Password is required");
        return;
    }

    setLoading(true);

    setTimeout(() => {

        auth.login({
            name: "Dhananjay",
            email: email
        });

        setLoading(false);

        navigate("./dashboard");

    }, 1000);

}

    return (

        
        <div className="login-container">

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >

                <h1>{APP_NAME}</h1>

                <p>Welcome Back</p>

                {
                    error &&
                    <div className="error">
                        {error}
                    </div>
                }

                <label>Email</label>

                <input

                    type="email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    placeholder="Enter Email"

                />

                <label>Password</label>

                <div className="password-box">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className="eye-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </button>

                </div>

                <div className="login-options">

                    <label>

                        <input

                            type="checkbox"

                            checked={remember}

                            onChange={(e) => setRemember(e.target.checked)}

                        />

                        Remember Me

                    </label>

                    <a href="#">Forgot Password?</a>

                </div>

                <button
                    className="login-btn"
                    disabled={loading}
                >

                    {
                        loading

                            ?

                            "Logging in..."

                            :

                            "Login"

                    }

                </button>

            </form>

        </div>

    );

}

export default Login;