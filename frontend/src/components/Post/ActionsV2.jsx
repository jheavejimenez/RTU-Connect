import React from "react";
import { useNavigate } from "react-router-dom";
import {
    LikeIcon, ReplyIcon, RetweetIcon, ShareIcon,
} from "../../icons/IconsV2";
import Rune from "./Rune";

function Actions({
    replies, retweets, likes, isComment, publicationId,
}) {
    const navigate = useNavigate();
    return (
        <div className={"flex justify-between mt-3 max-w-md cursor-pointer"}>
            <button
                className={"flex items-center group tablet:pr-4"}
                onClick={() => { navigate(`/comments/${publicationId}`); }}
            >
                <Rune
                    Icon={<ReplyIcon fill={"group-hover:fill-sky-500"} />}
                    color={"group-hover:bg-sky-100"}
                />
                <p className={"text-xs group-hover:text-sky-500"}>{replies}</p>
            </button>
            <div className={"flex gap-1 items-center group tabletpx-4"}>
                <Rune
                    Icon={<RetweetIcon fill={"group-hover:fill-green-500"} />}
                    color={"group-hover:bg-green-100"}
                />
                <p className={"text-xs group-hover:text-green-500"}>{retweets}</p>
            </div>
            <div className={"flex gap-1 items-center group tabletpx-4"}>
                <Rune
                    Icon={<LikeIcon fill={"group-hover:fill-rose-500"} />}
                    color={"group-hover:bg-rose-100"}
                />
                <p className={"text-xs group-hover:text-rose-500"}>{likes}</p>
            </div>
            {!isComment && (
                <div className={"flex gap-1 items-center group tabletpl-4"}>
                    <Rune
                        Icon={<ShareIcon fill={"group-hover:fill-sky-500"} />}
                        color={"group-hover:bg-sky-100"}
                    />
                </div>
            )}
        </div>
    );
}

export default Actions;
