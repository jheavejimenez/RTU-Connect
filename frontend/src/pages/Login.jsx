import React from "react";
import { useMoralis } from "react-moralis";
import ButtonFunctionCall from "../components/Button/ButtonFunctionCall";
import lensHub from "../utils/lensHub.json";
import { ADDRESS } from "../utils/constants";

const webAuthClientId = process.env.REACT_APP_WEB3_AUTH_CLIENT_ID;

function Login({ wallet, setWallet }) {
    const {
        authenticate,
        isAuthenticating,
        Moralis,
        user,
    } = useMoralis();

    const ethers = Moralis.web3Library;

    const handleConnectWallet = async () => {
        try {
            await authenticate({
                provider: "web3Auth",
                clientId: webAuthClientId,
                chainId: Moralis.Chains.POLYGON_MUMBAI,
                appLogo: "https://images.web3auth.io/web3auth-logo-w.svg",
                theme: "light",
                loginMethodsOrder: ["google"],
            });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await user.get("ethAddress");

            const contract = new ethers.Contract(ADDRESS.lensHub, lensHub, signer);
            setLensHub(contract);
            setWallet({ ...wallet, signer, address });
            // navigate("/");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className={"container flex items-center justify-center mx-auto h-screen"}>
            <div className={"flex w-full justify-center px-6"}>
                <div className={"shadow-md bg-white items-center w-full flex"} style={{ height: "500px" }}>
                    <div className={"w-1/2  p-5 rounded-lg lg:rounded-r-none"}>
                        <div className={"px-8 pb-8 mb-8"}>
                            <img
                                className={"mx-auto"}
                                src={require("../images/RTULogo.png")}
                                alt={"logo of RTU"}
                            />
                        </div>
                        <div className={"text-center flex items-center justify-center"}>
                            {isAuthenticating ? (
                                <div
                                    className={"w-10 h-10 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"}
                                />
                            ) : (
                                <ButtonFunctionCall
                                    text={"Connect your wallet"}
                                    func={handleConnectWallet}
                                />
                            )}
                        </div>
                        <hr className={"my-6"} />
                        <div className={"text-center m-4"}>
                            <a
                                className={"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}
                                href={"https://web3auth.io"}
                            >
                                {"Don"}
                                &apos;
                                {"t have an Handle? Create an handle now!"}
                            </a>
                        </div>
                    </div>
                    <div
                        className={"w-1/2 h-full bg-cover rounded-r-lg"}
                        style={{ backgroundImage: `url(${require("../images/rtu.jpg")})` }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
