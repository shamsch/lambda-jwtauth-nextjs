import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Secret = () => {
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

	const { data, error } = useSWR("/api/", (url) =>
		fetch(url, {
			headers: {
				authorization: `Bearer ${sessionStorage.getItem("token")}`,
			},
		}).then((res) => res.json())
	);

	return (
		<>
			<h1>Secret</h1>
			<div className="text">
				{error ? <p>{error.message}</p> : null}
				{data ? (
					<p>
						The secret is your email <b>{data.email}</b> and id <b>{data.id}</b>
					</p>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</>
	);
};

export default Secret;
