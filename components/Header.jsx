import React from "react";
import Head from "next/head";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Head>
                <title>AWS Lambda x JWT Auth</title>
            </Head>
            <header>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/login">
                    <a>Login</a>
                </Link>
                <Link href="/signup">
                    <a>Signup</a>
                </Link>
            </header>
        </>
    );
};

export default Header;
