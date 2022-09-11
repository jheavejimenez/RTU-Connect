import React from "react";
import Button from "../components/Button/Button";

function Login() {
    return (
        <div className={"container mx-auto"}>
            <div className={"flex justify-center px-6 my-12"}>
                <div className={"w-full xl:w-3/4 lg:w-11/12 flex"}>
                    <div
                        className={"w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"}
                        style={{backgroundImage: `url(${require("../images/rtu.jpg")})`}}
                    ></div>
                    <div className={"w-full bg-white p-5 mb-20 rounded-lg lg:rounded-l-none"}>
                        <div className={"px-8 pt-6 pb-8 mb-4"}>
                            <img className={"mx-auto"} src={require("../images/RTULogo.png")}/>
                        </div>
                        <div className={"m-6 px-20 text-center"}>
                            <Button text="Login" path={"/Home"}/>
                        </div>
                        <hr className={"mb-6 border-t"}/>
                        <div className={"text-center m-4"}>
                            <a
                                className={"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}
                            >
                                Don't have an account? Register!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
