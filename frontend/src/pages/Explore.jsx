import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import NavBar from "../components/NavBar/NavBar";
import { GET_EXPLORE } from "../graphQL/queries";
import PostV2 from "../components/Post/Postv2";

function Explore() {
    const { data } = useQuery(GET_EXPLORE);
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        if (!data) return;
        setPublications(data.explorePublications.items);
    }, [data]);

    return (
        <>
            <NavBar />
            <div className={"grid grid-cols-1 gap-1 my-5 mx-12 w-2/5 container px-2 mx-auto"}>
                {publications.map((post) => (
                    <PostV2
                        key={post.id}
                        post={post}
                        profileId={""}
                    />
                ))}
            </div>
        </>
    );
}

export default Explore;
