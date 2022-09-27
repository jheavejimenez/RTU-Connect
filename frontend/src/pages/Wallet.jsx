import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useLazyQuery } from "@apollo/client";
import ButtonFunctionCall from "../components/Button/ButtonFunctionCall";
import { GET_PROFILES } from "../GraphQL/queries";
import lensHub from "../utils/lensHub.json";
import { ADDRESS } from "../utils/constants";

const webAuthClientId = process.env.REACT_APP_WEB3_AUTH_CLIENT_ID;

function Wallet({
    wallet, setWallet, authToken, setProfile, setLensHub,
}) {
    const [getProfiles, profiles] = useLazyQuery(GET_PROFILES);
    const {
        authenticate,
        isAuthenticating,
        Moralis,
        user,
    } = useMoralis();

    const ethers = Moralis.web3Library;

    // useEffect(() => {
    //     const init = async () => {
    //         try {
    //             const web3auth = new Web3AuthCore({
    //                 clientId,
    //                 chainConfig: {
    //                     chainNamespace: CHAIN_NAMESPACES.EIP155,
    //                     chainId: "0x13881", // hex of 80001, polygon testnet
    //                     // rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
    //                     // // Avoid using public rpcTarget in production.
    //                     // // Use services like Infura, Quicknode etc
    //                     // displayName: "Polygon Mainnet",
    //                     // blockExplorer: "https://mumbai.polygonscan.com/",
    //                     // ticker: "MATIC",
    //                     // tickerName: "Matic",
    //                 },
    //             });
    //
    //             const openloginAdapter = new OpenloginAdapter({
    //                 adapterSettings: {
    //                     network: "testnet",
    //                     uxMode: "popup",
    //                     whiteLabel: {
    //                         name: "RTU Connect",
    //                         logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
    //                         defaultLanguage: "en",
    //                     },
    //                     loginConfig: {
    //                         google: {
    //                             name: "RTU Connect",
    //                             verifier: "rtu-connect",
    //                             typeOfLogin: "google",
    //                             clientId: googleClientId, // use app client id from Google
    //                         },
    //                     },
    //                 },
    //             });
    //             web3auth.configureAdapter(openloginAdapter);
    //             setWeb3auth(web3auth);
    //
    //             await web3auth.init();
    //             if (web3auth.provider) {
    //                 setProvider(web3auth.provider);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //
    //     init();
    // }, []);
    //
    // const handleLogin = async () => {
    //     if (!web3auth) {
    //         console.log("web3auth not initialized yet");
    //         return;
    //     }
    //     const web3authProvider = await web3auth.connectTo(
    //         WALLET_ADAPTERS.OPENLOGIN,
    //         {
    //             loginProvider: "google",
    //         },
    //     );
    //     setProvider(web3authProvider);
    //
    //     // this code must be change  because it is not secure
    //     if (user.loggedIn) return;
    //     setUser({ loggedIn: true });
    //
    //     // check if provider is set and  location.state.from is set
    //     if (location.state?.from) {
    //         navigate(location.state.from);
    //     }
    // };
    // const logout = async () => {
    //     if (!web3auth) {
    //         console.log("web3auth not initialized yet");
    //         return;
    //     }
    //     await web3auth.logout();
    //     setProvider(null);
    // };
    // const getUserInfo = async () => {
    //     if (!web3auth) {
    //         console.log("web3auth not initialized yet");
    //         return;
    //     }
    //     const user = await web3auth.getUserInfo();
    //     console.log(user);
    // };

    useEffect(() => {
        if (!authToken) return;

        getProfiles({
            variables: {
                request: {
                    ownedBy: wallet.address,
                },
            },
        });
    }, [authToken]);

    useEffect(() => {
        if (!profiles.data) return;
        console.log(profiles.data.profiles.items);

        setProfile(profiles.data.profiles.items[0]);
    }, [profiles.data]);

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

export default Wallet;
