import { useState } from "react";
import Axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const API = process.env.API;

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp(email, password);
    };

    const handleSignUp = async (email, password) => {
        const response = await Axios.post(
            `${API}/signup`,
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );

        console.log(response);
    };

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Email:
                    <br />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                    />
                </label>
                <label>
                    Password:
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                    />
                </label>

                <button>Signup</button>
            </form>
        </>
    );
};

export default Signup;
