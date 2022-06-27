import { useState } from "react";
import { Notification } from "../components/Notification";
import { useRouter } from "next/router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const router = useRouter();

	const API = process.env.API;

	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogIn(email, password);
	};

	const handleLogIn = (email, password) => {
		fetch(`${API}/signin`, {
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
				console.log(email, password);
				if (data.error) {
					setError(data.error);
				}
				if (data.token) {
					setSuccess(true);
					saveToken(data.token);
					setTimeout(() => {
						setSuccess(false);
						router.push("/");
					}, 3000);
				}
			})
			.catch((err) => {
				setError(err);
			});
	};

	const saveToken = (token) => {
		sessionStorage.setItem("token", token);
	};

	const handleError = (timeout) => {
		setTimeout(() => {
			setError(null);
		}, timeout);
		return <Notification message={error} />;
	};

	return (
		<>
			<h1>Log In</h1>
			{error ? handleError(3000) : null}
			{success ? (
				<Notification
					message={
						"Successful log in. You will now have access to secret view shortly."
					}
				/>
			) : null}
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Registered Email:
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

				<button>Login</button>
			</form>
		</>
	);
};

export default Login;
