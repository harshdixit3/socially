"use client"

import {Post} from "@prisma/client";
import {useUser} from "@clerk/nextjs";
import {useState} from "react";

const PostCard = ({posts , dbUserId} : {posts : Post , dbUserId : string | null}) => {
    const user = useUser();

    const [newComment, setNewComment] = useState("");
    const [isCommenting, setIsCommenting] = useState(false);
    const [isLiking, setIsLiking] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);


    return (
        <div>PostCard</div>
    )
}
export default PostCard
