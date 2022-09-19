import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import ComposePost from "../components/ComposePost/ComposePost";
import Post from "../components/Post/Post";

function Profile() {
    const { Moralis, user } = useMoralis();
    const [userAddress, setUserAddress] = useState(null);
    const [balance, setBalance] = useState(0);
    const [isCopied, setIsCopied] = useState(false);

    const getUserAddress = async () => {
        const userAddress = await user.get("ethAddress");
        setUserAddress(userAddress);
    };

    const fetchBalance = async () => {
        try {
            const options = { chain: Moralis.Chains.POLYGON_MUMBAI };
            const balance = await Moralis.Web3API.account.getNativeBalance(options);
            setBalance(balance.balance / 10 ** 18);
        } catch (error) {
            console.error(error);
        }
    };

    const copyAddress = () => {
        navigator.clipboard.writeText(userAddress);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    useEffect(() => {
        fetchBalance();
        getUserAddress();
        const interval = setInterval(() => {
            fetchBalance();
            getUserAddress();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto"}>
                <aside className={""}>
                    <div className={"bg-white shadow rounded-lg p-10"}>
                        <div className={"flex flex-col gap-1 text-center items-center"}>
                            <img
                                className={"h-32 w-32 bg-white p-2 rounded-full shadow mb-4"}
                                src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"}
                                alt={""}
                            />
                            <p className={"font-semibold"}>{"John Doe"}</p>
                            <div className={"text-sm leading-normal text-gray-400 flex justify-center items-center"}>
                                {"Wallet Address: "}
                                {userAddress !== null ? (`${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`) : "Loading..."}
                                <button className={"ml-2"} onClick={copyAddress}>
                                    {isCopied ? (
                                        <svg
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            className={"h-5 w-5 text-green-500"}
                                            viewBox={"0 0 20 20"}
                                            fill={"currentColor"}
                                        >
                                            <path
                                                fillRule={"evenodd"}
                                                d={"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 2a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h5zm-1 2v4h-4V6h4z"}
                                                clipRule={"evenodd"}
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns={"http://www.w3.org/2000/svg"}
                                            className={"h-5 w-5 text-gray-400"}
                                            viewBox={"0 0 20 20"}
                                            fill={"currentColor"}
                                        >
                                            <path
                                                fillRule={"evenodd"}
                                                d={"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 2a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h5zm-1 2v4h-4V6h4z"}
                                                clipRule={"evenodd"}
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className={"flex justify-center items-center gap-2 my-3"}>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>
                                    {balance}
                                    {" "}
                                    {"MATIC"}
                                </p>
                                <span className={"text-gray-400"}>
                                    {"Wallet Balance"}
                                </span>
                            </div>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>{"102"}</p>
                                <span className={"text-gray-400"}>{"Followers"}</span>
                            </div>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>{"102"}</p>
                                <span className={"text-gray-400"}>{"Folowing"}</span>
                            </div>
                        </div>
                    </div>
                </aside>
                <article>
                    <ComposePost />
                    <Post />
                </article>
            </main>
        </>
    );
}

export default Profile;
