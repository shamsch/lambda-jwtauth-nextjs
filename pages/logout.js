import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
	const router = useRouter();

	let token = null;

	if (typeof window !== "undefined") {
		token = sessionStorage.getItem("token");
	}

	useEffect(() => {
		if (!token) {
			router.push("/login");
		}
	}, [token]);

	const handleClick = () => {
		router.push("/");
		sessionStorage.clear();
	};

	return (
		<button className="btn" onClick={handleClick}>
			Click to log out
		</button>
	);
};

export default Logout;
