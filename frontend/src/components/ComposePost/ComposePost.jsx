import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { ethers, utils } from "ethers";
import omitDeep from "omit-deep";
import { v4 as uuidv4 } from "uuid";
import Gallery from "../../svg/Gallery";
import { CREATE_POST_TYPED_DATA } from "../../graphQL/queries";
import ButtonFunctionCall from "../Button/ButtonFunctionCall";
import { submarine } from "../../utils/pinataAPICall";
import { baseMetadata, getSigner } from "../../utils/helpers";
import { ADDRESS } from "../../utils/constants";
import lensHubABI from "../../utils/lensHubABI.json";

function ComposePost({ wallet, profile, lensHub }) {
    const inputRef = useRef(null);
    const [mutatePostTypedData, typedPostData] = useMutation(CREATE_POST_TYPED_DATA);
    const uploadToIPFS = async () => {
        const metadata = {
            content: inputRef.current.innerHTML,
            description: inputRef.current.innerHTML,
            name: `Post by @${profile.handle}`,
            metadata_id: uuidv4(),
            ...baseMetadata,
        };
        const uri = await submarine(JSON.stringify(metadata));
        return uri;
    };

    const handleCreatePost = async () => {
        const metadataURI = await uploadToIPFS();

        const contract = new ethers.Contract(
            ADDRESS.lensHub,
            lensHubABI,
            getSigner(),
        );

        try {
            const createPostRequest = {
                profileId: profile,
                contentURI: `ipfs://${metadataURI.IpfsHash}`,
                collectModule: {
                    freeCollectModule: {
                        followerOnly: true,
                    },
                },
                referenceModule: {
                    followerOnlyReferenceModule: false,
                },
            };

            const postData = await mutatePostTypedData({
                variables: {
                    request: createPostRequest,
                },
            });

            const tx = await contract.post(postData);
            await tx.wait();
            console.log("tx", tx);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className={"relative z-10 p-0"}
            aria-labelledby={"modal-title"}
            role={"dialog"}
            aria-modal={"true"}
        >
            <div className={"relative inset-0 overflow-auto"}>
                <div className={"flex min-h-full items-end justify-center text-center md:items-center md"}>
                    <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-5 w-full"}>
                        <div className={"bg-white px-4 pt-5 pb-3 sm:p-6 sm:pb-3"}>
                            <textarea
                                id={"message"}
                                rows={"2"}
                                className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border resize-none"
                                    + " focus:ring-blue-500 focus:border-blue-500"}
                                placeholder={"What's on your mind"}
                                ref={inputRef}
                            />
                            <div className={"sm:flex sm:items-start"}>
                                <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}>
                                    <div className={"mt-2"} />
                                </div>
                            </div>
                        </div>
                        <div className={"bg-white px-4 py-3 flex justify-between px-6"}>
                            <Gallery />
                            <ButtonFunctionCall
                                func={handleCreatePost}
                                type={"submit"}
                                text={"Post"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComposePost;
