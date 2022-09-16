import {useEffect, useState} from "react";
import {Web3AuthCore} from '@web3auth/core'
import {
    WALLET_ADAPTERS,
    CHAIN_NAMESPACES,
    SafeEventEmitterProvider,
} from '@web3auth/base'
import {OpenloginAdapter} from '@web3auth/openlogin-adapter'
import Button from "../components/Button/Button";

function Login() {
    return (
        <div className={"container flex items-center justify-center mx-auto h-screen"}>
            <div className={"flex w-full justify-center px-6"}>
                <div className={"shadow-md items-center w-full flex"} style={{height: "500px"}}>
                    <div className={"w-1/2 bg-white p-5 rounded-lg lg:rounded-r-none"}>
                        <div className={"px-8 pb-8 mb-8"}>
                            <img className={"mx-auto"} src={require("../images/RTULogo.png")}/>
                        </div>
                        <div className={"text-center"}>
                            <Button text="Login" path={"/"}/>
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
