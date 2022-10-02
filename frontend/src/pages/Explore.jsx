import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import NavBar from "../components/NavBar/NavBar";
import { GET_EXPLORE } from "../graphQL/queries";
import Post from "../components/Post/Post";

function Explore() {
    const { data } = useQuery(GET_EXPLORE);
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        if (!data) return;
        setPublications(data.explorePublications.items);
        console.log(publications);
    }, [data]);

    return (
        <>
            <NavBar />
            {publications.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    profileId={""}
                />
            ))}
        </>
    );
}

export default Explore;
