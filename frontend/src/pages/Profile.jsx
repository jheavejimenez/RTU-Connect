import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ComposePost from "../components/ComposePost/ComposePost";
import Post from "../components/Post/Post";
import SVGCopyCLick from "../svg/Copy/CopyClick";
import SVGCopyNotClick from "../svg/Copy/CopyNotClick";

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

    const onCopy = React.useCallback(() => {
        setIsCopied(true);
    }, []);

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
                                <CopyToClipboard onCopy={onCopy} text={userAddress}>
                                    <button className={"ml-2"}>
                                        {isCopied ? (
                                            <SVGCopyCLick />
                                        ) : (
                                            <SVGCopyNotClick />
                                        )}
                                    </button>
                                </CopyToClipboard>
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
