import { useRouter } from "next/router";

const Logout = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
        sessionStorage.clear();
    };
    
    return <button className="btn" onClick={handleClick}>Click to log out</button>;
};

export default Logout;
