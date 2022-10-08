import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ethers } from "ethers";
import { v4 as uuidv4 } from "uuid";
import Gallery from "../../svg/Gallery";
import ButtonFunctionCall from "../Button/ButtonFunctionCall";
import { submarine } from "../../utils/pinataAPICall";
import {
    baseMetadata, getSigner, signedTypeData, splitSignature, 
} from "../../utils/helpers";
import { ADDRESS } from "../../utils/constants";
import lensHubABI from "../../utils/lensHubABI.json";
import { CREATE_POST_TYPED_DATA } from "../../graphQL/mutations";

const PublicationMainFocus = {
    VIDEO: "VIDEO",
    IMAGE: "IMAGE",
    ARTICLE: "ARTICLE",
    TEXT_ONLY: "TEXT_ONLY",
    AUDIO: "AUDIO",
    LINK: "LINK",
    EMBED: "EMBED",
};

function ComposePost({ profile }) {
    const [content, setContent] = useState("");
    const [mutatePostTypedData, typedPostData] = useMutation(CREATE_POST_TYPED_DATA);
    const uploadToIPFS = async () => {
        const metadata = {
            metadata_id: uuidv4(),
            description: "RTU Connect Post",
            content,
            image: null,
            imageMimeType: null,
            ...baseMetadata,
        };

        const uri = await submarine(JSON.stringify(metadata));
        return uri;
    };

    const handleCreatePost = async () => {
        const metadataURI = await uploadToIPFS();

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

        await mutatePostTypedData({
            variables: {
                request: createPostRequest,
            },
        });
    };
    useEffect(() => {
        if (!typedPostData.data) return;

        const processPost = async () => {
            const { typedData } = typedPostData.data.createPostTypedData;
            const { domain, types, value } = typedData;

            // eslint-disable-next-line no-underscore-dangle
            const signature = await signedTypeData(domain, types, value);
            const { v, r, s } = splitSignature(signature);
            const contract = new ethers.Contract(
                ADDRESS.lensHub,
                lensHubABI,
                getSigner(),
            );
            const tx = await contract.postWithSig({
                profileId: typedData.value.profileId,
                contentURI: typedData.value.contentURI,
                collectModule: typedData.value.collectModule,
                collectModuleInitData: typedData.value.collectModuleInitData,
                referenceModule: typedData.value.referenceModule,
                referenceModuleInitData: typedData.value.referenceModuleInitData,
                sig: {
                    v,
                    r,
                    s,
                    deadline: typedData.value.deadline,
                },
            });
            console.log("create post: tx hash", tx.hash);
        };
        processPost();
    }, [typedPostData.data]);
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
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
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
