import React, { useEffect, useState } from "react";
import { sequence } from "0xsequence";
import Web3Modal from "@0xsequence/web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import ButtonFunctionCall from "../components/Button/ButtonFunctionCall";

// Configure  wallet
let providerOptions = {
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: "xxx-your-infura-id-her",
        },
    },
};

if (!window?.ethereum?.isSequence) {
    providerOptions = {
        ...providerOptions,
        sequence: {
            package: sequence,
            options: {
                appName: "RTU Connect",
                defaultNetwork: "polygon",
            },
        },
    };
}

const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true,
});

function Login() {
    const [provider, setProvider] = useState(null);
    const connectWallet = async () => {
        const wallet = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(wallet);

        if (wallet.sequence) {
            (provider).sequence = wallet.sequence;
        }

        setProvider(provider);
    };

    useEffect(() => {
        if (web3Modal.cachedProvider) {
            connectWallet();
        }
    }, []);

    const connectWeb3Modal = async () => {
        if (web3Modal.cachedProvider) {
            web3Modal.clearCachedProvider();
        }
        connectWallet();
    };

    const disconnectWeb3Modal = async () => {
        web3Modal.clearCachedProvider();

        if (provider && (provider).sequence) {
            const wallet = (provider).sequence;
            wallet.disconnect();
        }

        setProvider(null);
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
                            <ButtonFunctionCall
                                text={"Connect your wallet"}
                                func={connectWeb3Modal}
                            />
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
