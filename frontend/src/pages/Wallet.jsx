import React, { useEffect } from "react";
import Web3Modal from "@0xsequence/web3modal";
import { ethers } from "ethers";
import { useLazyQuery, useMutation } from "@apollo/client";
import ButtonFunctionCall from "../components/Button/ButtonFunctionCall";
import lensHubABI from "../utils/lensHubABI.json";
import { ADDRESS, gitBook } from "../utils/constants";
import { GET_PROFILES } from "../graphQL/queries";
import { useAuth } from "../hooks/useAuth";
import { AUTHENTICATION, GET_CHALLENGE } from "../graphQL/mutations";

// Configure  wallet
let providerOptions = {
    injected: {
        display: {
            name: "Metamask",
            description: "Connect to your MetaMask wallet",
        },
        package: null,
    },
};

if (!window?.ethereum?.isSequence) {
    providerOptions = {
        ...providerOptions,
        // sequence: {
        //     package: sequence,
        //     options: {
        //         appName: "RTU Connect",
        //         defaultNetwork: "mumbai",
        //     },
        // },
    };
}

const web3Modal = new Web3Modal({
    providerOptions,
    cacheProvider: true,
});

function Wallet({
    wallet, setWallet, setLensHub,
}) {
    const [getChallenge, {
        error: challengeError,
        loading: challengeLoading,
    }] = useLazyQuery(GET_CHALLENGE);
    const [authenticate, {
        error: authenticateError,
        loading: authenticateLoading,
    }] = useMutation(AUTHENTICATION);
    const [getProfile, {
        error: profileError,
        loading: profileLoading,
    }] = useLazyQuery(GET_PROFILES);

    const { profileData, login } = useAuth();

    // optimize this after capstone defense 1
    const connectWallet = async () => {
        // for clearing cache
        if (web3Modal.cachedProvider) {
            web3Modal.clearCachedProvider();
        }
        const wallet = await web3Modal.connect();

        // switch to mumbai testnet if not already on it
        if (wallet?.chainId !== 80001) {
            try {
                await wallet.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x13881" }],
                });
            } catch (error) {
                if (error.code === 4902) {
                    try {
                        await wallet.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: "0x13881",
                                    chainName: "Mumbai Testnet",
                                    nativeCurrency: {
                                        name: "MATIC",
                                        symbol: "MATIC",
                                        decimals: 18,
                                    },
                                    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                                    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
                                },
                            ],
                        });
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        }

        const provider = new ethers.providers.Web3Provider(wallet);

        if (wallet.sequence) {
            (provider).sequence = wallet.sequence;
        }

        const signer = provider.getSigner();
        const address = await signer.getAddress();

        const contract = new ethers.Contract(ADDRESS.lensHub, lensHubABI, signer);

        setLensHub(contract);
        provider.getBalance(address).then((balance) => {
            // convert a currency unit from wei to ether
            const balanceInEth = ethers.utils.formatEther(balance);
            setWallet({
                ...wallet, signer, address, balanceInEth,
            });
        });
    };
    //
    // const handleGetChallenge = async () => {
    //     await getChallenge({
    //         variables: {
    //             request: {
    //                 address: wallet.address,
    //             },
    //         },
    //     });
    // };
    //
    // useEffect(() => {
    //     if (!profiles.data) return;
    //
    //     const data = profiles.data.profiles.items[0];
    //     profileData(data !== undefined ? data : {}); // this code can cause a bug in the future
    // }, [profiles.data]);
    //
    // useEffect(() => {
    //     if (!challengeData.data) return;
    //
    //     const handleSign = async () => {
    //         // eslint-disable-next-line max-len
    //         const signature = await wallet.signer.signMessage(challengeData.data.challenge.text);
    //         await mutateAuth({
    //             variables: {
    //                 request: {
    //                     address: wallet.address,
    //                     signature,
    //                 },
    //             },
    //         });
    //     };
    //
    //     handleSign();
    // }, [challengeData.data]);
    //
    // useEffect(() => {
    //     if (!authData.data) return;
    //
    //     login(authData.data.authenticate.accessToken);
    //     window.sessionStorage.setItem("lensToken", authData.data.authenticate.accessToken);
    // }, [authData.data]);

    // const connectWeb3Modal = async () => {
    //     if (web3Modal.cachedProvider) {
    //         web3Modal.clearCachedProvider();
    //     }
    //     connectWallet();
    // };

    async function handleLogin() {
        try {
            const challenge = await getChallenge({
                variables: { request: { address: wallet.address } },
            });

            if (!challenge?.data?.challenge?.text) {
                toast.error("Error getting challenge");
            }

            const signature = await wallet.signer.signMessage(challenge.data.challenge.text);

            const auth = await authenticate({
                variables: { request: { address: wallet.address, signature } },
            });

            // set data to local storage
            login(auth.data?.authenticate.accessToken);
            window.sessionStorage.setItem("refreshToken", auth.data?.authenticate.refreshToken);

            const { data: profileData } = await getProfile({
                variables: { request: { ownedBy: wallet.address } },
            });

            if (profileData.profiles?.items) {
                const profiles = profileData?.profiles.items;
                const currentProfile = profiles[0];
                setProfiles(profiles);
                setCurrentProfile(currentProfile);
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                            {/* eslint-disable-next-line no-nested-ternary */}
                            {wallet.address === undefined
                                ? (
                                    <ButtonFunctionCall
                                        func={connectWallet}
                                        text={"connect wallet"}
                                    />
                                )
                                : (
                                    <ButtonFunctionCall
                                        func={handleLogin}
                                        text={"Sign In to RTU-Connect"}
                                    />

                                )}
                        </div>
                        <hr className={"my-6"} />
                        <div className={"text-center m-4"}>
                            <a
                                className={"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}
                                href={`${gitBook}/getting-set-up/setting-up-metamask`}
                                target={"_blank"}
                                rel={"noreferrer"}
                            >
                                {"Don"}
                                &apos;
                                {"t have a metamask? Create an metamask now!"}
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

export default Wallet;
