import React, { createRef, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ButtonFunctionCall from "../components/Button/ButtonFunctionCall";
import { CREATE_PROFILE } from "../graphQL/mutations";

function CreateHandle() {
    const [createProfile, createProfileData] = useMutation(CREATE_PROFILE);
    const handleRef = createRef();
    const navigate = useNavigate();
    const { loading } = createProfileData;
    const handleCreate = async (e) => {
        e.preventDefault();
        const handle = handleRef.current.value.replace("@", "");
        if (!handle) {
            return;
        }
        const profileRequest = {
            handle,
        };
        await createProfile({
            variables: {
                request: profileRequest,
            },
        });
    };

    useEffect(() => {
        if (!createProfileData.data) return;

        if (createProfileData.data.createProfile.reason !== "HANDLE_TAKEN") {
            // navigate to login page with window reload
            navigate("/login");
        } else {
            toast.error("Handle already taken");
        }
    }, [createProfileData.data]);

    const inputHandleValue = (e) => {
        if (e.target.value[0] !== "@") {
            e.target.value = `@${e.target.value}`;
        }
        if (e.target.value.length === 1) {
            e.target.value = "";
        }
    };

    return (
        <div className={"relative flex flex-col justify-center min-h-screen overflow-hidden "}>
            {loading ? (
            // loading animation
                <div className={"flex justify-center"}>
                    <div className={"flex flex-col items-center justify-center"}>
                        <span className={"animate-pulse font-bold text-gray-800"}>{"Creating profile..."}</span>
                    </div>
                </div>
            ) : (
                <div
                    className={"w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl"}
                >
                    <h1 className={"text-3xl font-semibold text-center text-gray-600"}>
                        {"Create Profile"}
                    </h1>
                    <form className={"mt-5"}>
                        <div className={"flex flex-col space-y-4"}>
                            <div className={"flex flex-col space-y-1"}>
                                <label
                                    htmlFor={"name"}
                                    className={"text-sm font-semibold text-gray-600"}
                                >
                                    {"Enter your profile username"}
                                </label>
                                <input
                                    id={"name"}
                                    type={"text"}
                                    placeholder={"@username"}
                                    ref={handleRef}
                                    onChange={inputHandleValue}
                                    autoComplete={"off"}
                                    className={"w-full px-4 py-2 text-gray-700 bg-gray-200"
                                    + " rounded-lg focus:outline-none focus:bg-gray-100"}
                                />
                            </div>
                            <div className={"flex flex-col space-y-1"}>
                                <ButtonFunctionCall text={"Create Profile"} func={handleCreate} />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CreateHandle;
