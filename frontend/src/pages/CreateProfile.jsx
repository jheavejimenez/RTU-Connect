import React, { useState, useEffect, createRef } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import ButtonFunctionCall from "../components/Button/ButtonFunctionCall";

const CREATE_PROFILE = gql`
    mutation ($request: CreateProfileRequest!) {
        createProfile(request: $request) {
            ... on RelayerResult {
                txHash
            }
            ... on RelayError {
                reason
            }
            __typename
        }
    }
`;

const MODULE_APPROVAL_DATA = gql`
    query ($request: GenerateModuleCurrencyApprovalDataRequest!) {
        generateModuleCurrencyApprovalData(request: $request) {
            to
            from
            data
        }
    }
`;

function CreateHandle() {
    const [createProfile, createProfileData] = useMutation(CREATE_PROFILE);
    const handleRef = createRef();

    const handleCreate = async (e) => {
        e.preventDefault();
        const handle = handleRef.current.value.replace("@", "");
        if (!handle) {
            console.log("no handle");
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

        console.log(createProfileData.data);
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
                                {"Enter yor profile handle"}
                            </label>
                            <input
                                id={"name"}
                                type={"text"}
                                placeholder={"@handle"}
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
        </div>
    );
}
export default CreateHandle;