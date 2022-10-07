import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { BigNumber, ethers, utils } from "ethers";
import { v4 as uuidv4 } from "uuid";
import Gallery from "../../svg/Gallery";
import ButtonFunctionCall from "../Button/ButtonFunctionCall";
import { submarine } from "../../utils/pinataAPICall";
import {
    getSigner, pollUntilIndexed, signedTypeData, splitSignature, 
} from "../../utils/helpers";
import { ADDRESS } from "../../utils/constants";
import lensHubABI from "../../utils/lensHubABI.json";
import { CREATE_POST_TYPED_DATA } from "../../graphQL/mutations";

function ComposePost({ wallet, profile, lensHub }) {
    const [content, setContent] = useState("");
    const [mutatePostTypedData, typedPostData] = useMutation(CREATE_POST_TYPED_DATA);
    const uploadToIPFS = async () => {
        const metadata = {
            version: "2.0.0",
            mainContentFocus: "TEXT_ONLY",
            metadata_id: uuidv4(),
            description: "RTU Connect Post",
            locale: "en-US",
            content,
            external_url: null,
            image: null,
            imageMimeType: null,
            name: "Posted @RTUCONNECT",
            attributes: [],
            tags: ["RTU_CONNECT"],
            appId: "rtu-connect",

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
            console.log("create post: poll until indexed");
            const indexedResult = await pollUntilIndexed(tx.hash);

            console.log("create post: profile has been indexed");

            const { logs } = indexedResult.txReceipt;

            console.log("create post: logs", logs);

            const topicId = utils.id(
                "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)",
            );
            console.log("topicid we care about", topicId);

            const profileCreatedLog = logs.find((l) => l.topics[0] === topicId);
            console.log("create post: created log", profileCreatedLog);

            const profileCreatedEventLog = profileCreatedLog.topics;
            console.log("create post: created event logs", profileCreatedEventLog);

            const publicationId = utils.defaultAbiCoder.decode(["uint256"], profileCreatedEventLog[2])[0];

            console.log("create post: contract publication id", BigNumber.from(publicationId).toHexString());
            console.log(
                "create post: internal publication id",
                `${profile}-${BigNumber.from(publicationId).toHexString()}`,
            );
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
