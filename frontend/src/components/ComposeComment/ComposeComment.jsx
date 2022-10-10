import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import Gallery from "../../svg/Gallery";
import ButtonFunctionCall from "../Button/ButtonFunctionCall";
import { baseMetadata } from "../../utils/helpers";
import { submarine } from "../../utils/pinataAPICall";
import { CREATE_COMMENT_TYPED_DATA } from "../../graphQL/mutations";

function ComposeComment({ publicationId }) {
    const [content, setContent] = useState("");
    const [mutateCommentTypeData, typeCommentData] = useMutation(CREATE_COMMENT_TYPED_DATA);
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

    const handleCreateComment = async (e) => {
        e.preventDefault();
        if (!publicationId) {
            alert("comment is empty");
            return;
        }
        const metadataURI = await uploadToIPFS();
    };
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
