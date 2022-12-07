import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import Gallery from "../../svg/Gallery";
import ButtonFunctionCall from "../Button/ButtonFunctionCall";
import {
    baseMetadata, getSigner, PublicationMainFocus, signedTypeData, splitSignature,
} from "../../utils/helpers";
import { submarine } from "../../utils/pinataAPICall";
import { CREATE_COMMENT_TYPED_DATA } from "../../graphQL/mutations";
import { useAuth } from "../../hooks/useAuth";
import { ADDRESS } from "../../utils/constants";
import lensHubABI from "../../utils/lensHubABI.json";

function ComposeComment({ publicationId }) {
    const [content, setContent] = useState("");
    const { profile } = useAuth();
    const [mutateCommentTypeData, typeCommentData] = useMutation(CREATE_COMMENT_TYPED_DATA);
    const uploadToIPFS = async () => {
        const metadata = {
            metadata_id: uuidv4(),
            description: "RTU Connect Post",
            content,
            mainContentFocus: PublicationMainFocus.TEXT_ONLY,
            image: null,
            imageMimeType: null,
            ...baseMetadata,

        };

        const uri = await submarine(JSON.stringify(metadata));
        return uri;
    };

    const handleCreateComment = async (e) => {
        e.preventDefault();
        if (!publicationId) {
            toast.error("comment is empty");
            return;
        }
        const metadataURI = await uploadToIPFS();
        const createCommentRequest = {
            profileId: profile.id,
            publicationId,
            contentURI: `ipfs://${metadataURI.IpfsHash}`,
            collectModule: {
                revertCollectModule: true,
            },
            referenceModule: {
                followerOnlyReferenceModule: false,
            },
        };
        await mutateCommentTypeData({
            variables: {
                request: createCommentRequest,
            },
        });
    };
    useEffect(() => {
        if (!typeCommentData.data) return;

        const processComment = async () => {
            const { typedData } = typeCommentData.data.createCommentTypedData;
            const { domain, types, value } = typedData;

            const signature = await signedTypeData(domain, types, value);
            const { v, r, s } = splitSignature(signature);

            const contract = new ethers.Contract(
                ADDRESS.lensHub,
                lensHubABI,
                getSigner(),
            );
            const tx = await contract.commentWithSig(
                {
                    profileId: typedData.value.profileId,
                    contentURI: typedData.value.contentURI,
                    profileIdPointed: typedData.value.profileIdPointed,
                    pubIdPointed: typedData.value.pubIdPointed,
                    collectModule: typedData.value.collectModule,
                    collectModuleInitData: typedData.value.collectModuleInitData,
                    referenceModule: typedData.value.referenceModule,
                    referenceModuleInitData: typedData.value.referenceModuleInitData,
                    referenceModuleData: typedData.value.referenceModuleData,
                    sig: {
                        v,
                        r,
                        s,
                        deadline: typedData.value.deadline,
                    },
                },
                { gasLimit: 500000 },
            );
            console.log("Comment tx hash", tx.hash);
        };
        processComment();
    }, [typeCommentData]);

    return (
        <div className={"mx-auto shadow-md bg-white rounded-md mb-5 w-full"}>
            <div className={"border-t-[1px] px-4 pt-3 pb-2d"}>
                <textarea
                    rows={"2"}
                    className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border resize-none"
                        + " focus:ring-blue-500 focus:border-blue-500 whitespace-pre-wrap"}
                    placeholder={"Tell something cool"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className={"bg-white pt-3 pb-5 flex justify-between px-6"}>
                <Gallery />
                <ButtonFunctionCall
                    text={"Comment"}
                    type={"submit"}
                    func={handleCreateComment}
                />
            </div>
        </div>
    );
}

export default ComposeComment;
