import useSWR from "swr";

const Secret = () => {
    const { data, error } = useSWR("/api/", (url) =>
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
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
                ) : null}
            </div>
        </>
    );
};

export default Secret;
