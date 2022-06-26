import { useRouter } from "next/router";

const Logout = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
        localStorage.removeItem("token");
    };
    return <button className="btn" onClick={handleClick}>log out</button>;
};

export default Logout;
