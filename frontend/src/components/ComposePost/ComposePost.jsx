import React, { useState } from "react";
import { NFTStorage, File, Blob } from "nft.storage";
import { useMutation } from "@apollo/client";
import Gallery from "../../svg/Gallery";
import ButtonNoClassName from "../Button/ButtonNoClassName";
import { CREATE_POST_TYPED_DATA } from "../../graphQL/queries";

export
function ComposePost() {
    const PublicationMainFocus = {
        VIDEO: "VIDEO",
        IMAGE: "IMAGE",
        ARTICLE: "ARTICLE",
        TEXT_ONLY: "TEXT_ONLY",
        AUDIO: "AUDIO",
        LINK: "LINK",
        EMBED: "EMBED",
    };
    const [description, setDescription] = useState("");
    const [mutatePostTypedData, typedPostData] = useMutation(CREATE_POST_TYPED_DATA);
    const client = new NFTStorage({
        token: process.env.REACT_APP_STORAGE_TOKEN,
    });

    const handleCreatePost = async () => {
        const metadata = await client.store({
            version: "2.0.0",
            mainContentFocus: PublicationMainFocus.TEXT_ONLY,
            metadata_id: uuidv4(),
            description: "Description",
            locale: "en-US",
            content: "Content",
            external_url: null,
            image: null,
            imageMimeType: null,
            name: "Name",
            attributes: [],
            tags: ["using_api_examples"],
            appId: "api_examples_github",
        });
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
                            />
                            <div className={"sm:flex sm:items-start"}>
                                <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}>
                                    <div className={"mt-2"} />
                                </div>
                            </div>
                        </div>
                        <div className={"bg-white px-4 py-3 flex justify-between px-6"}>
                            <Gallery />
                            <ButtonNoClassName
                                className={"inline-flex justify-center rounded-full border border-transparent bg-blue-800 px-4 py-2 "
                                    + "text-base font-medium text-white shadow-sm hover:bg-blue-700 "
                                    + "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}
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
