import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <>
            <h1>Log In</h1>
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

export default Login;
