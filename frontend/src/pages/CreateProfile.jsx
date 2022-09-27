import React, { createRef, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";

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

function NewProfile({ profile = {}, wallet }) {
    const [newProfile, setNewProfile] = useState({ ...profile });
    const [createProfile, createProfileData] = useMutation(CREATE_PROFILE);
    const handleRef = createRef();
    const costRef = createRef();

    // const bioRef = createRef()

    const handleCreate = async () => {
        const handle = handleRef.current.value.replace("@", "");
        if (!handle) {
            console.log("no handle");
            return;
        }
        const cost = costRef.current.value;
        if (!cost) {
            console.log("no cost");
            return;
        }

        const profileRequest = {
            handle,
        };

        // const bio = bioRef.current.value
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

    const handleHandle = (e) => {
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
                className={"w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl"}
            >
                <h1 className={"text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy"}>
                    {"Contact Form"}
                </h1>
                <form className={"mt-6"}>
                    <div className={"mb-2"}>
                        <span className={"text-gray-700"}>{"Your name"}</span>
                        <input
                            type={"text"}
                            name={"name"}
                            className={"w-fullblock px-16 py-2 mt-2 border-gray-300 rounded-md"
                                    + "shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                                    + "focus:ring-opacity-50"}
                            placeholder={"John cooks"}
                        />
                    </div>
                    <div className={"mb-2"}>
                        <span className={"text-gray-700"}>{"Email address"}</span>
                        <input
                            name={"email"}
                            type={"email"}
                            className={"block w-full mt-2 px-16 py-2 border-gray-300 rounded-md "
                                    + "shadow-sm focus:border-indigo-300 focus:ring "
                                    + "focus:ring-indigo-200 focus:ring-opacity-50"}
                            placeholder={"john.cooks@example.com"}
                            required
                        />
                    </div>
                    <div className={"mb-2"}>
                        <span className={"text-gray-700"}>{"Message"}</span>
                        <textarea
                            name={"message"}
                            className={"block w-full mt-2 px-16 py-8 border-gray-300 "
                                    + "rounded-md shadow-sm focus:border-indigo-300 focus:ring "
                                    + "focus:ring-indigo-200 focus:ring-opacity-50"}
                            rows={"5"}
                        />
                    </div>

                    <div className={"mb-6"}>
                        <button
                            type={"submit"}
                            className={"h-10 px-5 text-indigo-100 bg-indigo-700 "
                                + "rounded-lg transition-colors duration-150 "
                                + "focus:shadow-outline hover:bg-indigo-800"}
                        >
                            {"Contact Us"}
                        </button>
                    </div>
                    <div />
                </form>
            </div>
        </div>
    );
}

export default NewProfile;
