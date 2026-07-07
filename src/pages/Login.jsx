import { useState } from "react";
import "../styles/login.css";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        console.log(email);

        console.log(password);

    }

    return (

        <div className="login-container">

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >

                <h1>Laundry Management</h1>

                <p>Welcome Back</p>

                <label>Email</label>

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                />

                <label>Password</label>

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                />

                <button type="submit">

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;