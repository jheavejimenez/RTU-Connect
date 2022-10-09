import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COMMENT_FEED } from "../graphQL/queries";

function Comment() {
    const { publicationId } = useParams();
    const [comments, setComments] = useState([]);

    const { data } = useQuery(GET_COMMENT_FEED, {
        variables: {
            request: {
                "commentsOf": publicationId,
                "limit": 10,
            },
        },
    });

    useEffect(() => {
        if (!data) return;
        setComments(data.publications.items);
    }, [data]);
    
    return (
        <>
            <h1>{"hey"}</h1>
        </>
    );
}

export default Comment;
