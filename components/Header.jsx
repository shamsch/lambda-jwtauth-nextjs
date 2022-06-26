import React from "react";
import Head from "next/head";
import Link from "next/link";
const Header = () => {
    let token = null;
    if (typeof window !== "undefined") {
        token = sessionStorage.getItem("token");
    }
    return (
        <>
            <Head>
                <title>AWS Lambda x JWT Auth</title>
            </Head>
            <header>
                <Link href="/">
                    <a>Home</a>
                </Link>
                {token ? (
                    <>
                        <Link href="/secret">
                            <a>Secret view</a>
                        </Link>
                        <Link href="/logout">
                            <a>Logout</a>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/signup">
                            <a>Signup</a>
                        </Link>
                    </>
                )}
            </header>
        </>
    );
};

export default Header;
