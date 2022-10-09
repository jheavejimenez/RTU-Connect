import React from "react";

function PostV2({ post }) {
    return (
        <div className={"border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out"}>
            <div className={"grid grid-cols-[auto,1fr] gap-3"}>
                <Avatar src={post.image} alt={post.username} />
                <div>
                    <Heading name={post.name} username={post.username} time={post.time} />
                    <p>{post.caption}</p>
                    <Actions
                        replies={post.replies}
                        retweets={post.retweets}
                        likes={post.likes}
                    />
                </div>
            </div>
        </div>
    );
}

export default PostV2;
