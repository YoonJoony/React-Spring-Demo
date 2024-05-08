import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"김민재"} comment={"화이팅"}/>
        </div>
    );
}

export default CommentList;