import {useEffect, useState} from "react";
import {Web3AuthCore} from '@web3auth/core'
import {CHAIN_NAMESPACES, WALLET_ADAPTERS,} from '@web3auth/base'
import {OpenloginAdapter} from '@web3auth/openlogin-adapter'
import Button from "../components/Button/Button";

const clientId = process.env.REACT_APP_WEB3_AUTH_CLIENT_ID;

function Login() {
    const [web3auth, setWeb3auth] = useState(null)
    const [provider, setProvider] = useState(null)

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3AuthCore({
                    clientId,
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: '0x3',
                    },
                })

                const openloginAdapter = new OpenloginAdapter({
                    adapterSettings: {
                        network: 'testnet',
                        uxMode: 'popup',
                        whiteLabel: {
                            name: "RTU Connect",
                            logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
                            defaultLanguage: "en",
                        },
                        loginConfig: {
                            google: {
                                name: 'RTU Connect',
                                verifier: "rtu-connect",
                                typeOfLogin: 'google',
                                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, //use app client id from google
                            },
                        },
                    },
                })
                web3auth.configureAdapter(openloginAdapter)
                setWeb3auth(web3auth)

                await web3auth.init()
                if (web3auth.provider) {
                    setProvider(web3auth.provider);
                }
            } catch (error) {
                console.error(error)
            }
        }

        init()
    }, [])

    const handleLogin = async () => {
        if (!web3auth) {
            console.log('web3auth not initialized yet')
            return
        }
        const web3authProvider = await web3auth.connectTo(
            WALLET_ADAPTERS.OPENLOGIN,
            {
                loginProvider: 'google',
            },
        )
        setProvider(web3authProvider)
    }

    return (
        <div className={"container flex items-center justify-center mx-auto h-screen"}>
            <div className={"flex w-full justify-center px-6"}>
                <div className={"shadow-md items-center w-full flex"} style={{height: "500px"}}>
                    <div className={"w-1/2 bg-white p-5 rounded-lg lg:rounded-r-none"}>
                        <div className={"px-8 pb-8 mb-8"}>
                            <img className={"mx-auto"} src={require("../images/RTULogo.png")}/>
                        </div>
                        <div className={"text-center"}>
                           <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={handleLogin}>Login</button>
                        </div>
                        <hr className={"my-6"}/>
                        <div className={"text-center m-4"}>
                            <a
                                className={"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}
                            >
                                Don't have an account? Register!
                            </a>
                        </div>
                    </div>
                    <div
                        className={"w-1/2 h-full bg-cover rounded-r-lg"}
                        style={{backgroundImage: `url(${require("../images/rtu.jpg")})`}}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Login;
