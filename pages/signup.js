import { useState } from "react";
import { Notification } from "../components/Notification";
import {useRouter} from "next/router";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    
    const router = useRouter();


    const API = process.env.API;

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp(email, password);
    };

    const handleSignUp = (email, password) => {
        fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } 
                if(data.id){
                    setSuccess(true); 
                    setTimeout(() => {
                        setSuccess(false)
                        router.push("/login");
                    }, 3000);
                }
            })
            .catch((err) => {
                setError(err);
            });
    };

    const handleError = (timeout) => {
        setTimeout(() => {
            setError(null);
        }, timeout);
        return <Notification message={error} />;
    };

    return (
        <>
            <h1>Signup</h1>
            {error ? handleError(3000) : null}
            {success ? <Notification message={"Successful sign up. You will be redirected to log in shortly."} /> : null}
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Your Email:
                    <br />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                    />
                </label>
                <label>
                    Choose Password:
                    <br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                    />
                </label>

                <button className="btn">Signup</button>
            </form>
        </>
    );
};

export default Signup;
