import React from "react";
import { useState } from "react";
import CheckedIcon from "../assets/img/checked.png"

const PostItem = ({ post }) => {
    const [comment, setComment] = useState(false);
    const [like, setLike] = useState(false);
    const [share, setShare] = useState(false);

    const toggleComment = () => {
       if(!comment){
            post.comments++;
            setComment(true);
       } else{
            post.comments--;
            setComment(false);
       }
    }
    const toggleLike = () => {
        if(!like){
             post.likes++;
             setLike(true);
        } else{
             post.likes--;
             setLike(false);
        }
     }
     const toggleShares = () => {
        if(!share){
             post.shares++;
             setShare(true);
        } else{
             post.shares--;
             setShare(false);
        }
     }

    return(
    <div className="post_container">
        <div>
            <div className="container_img_info">
                <img className="user_photo" src={post.photo}  alt="User" width="100px" />
                <div className="container_info">
                    <div className="user_name">
                        {post.name}
                        <img src={CheckedIcon} alt="Checked icon" />
                    </div>
                    <a className="user_nickname" href="/">{post.nickname}</a>
                    <div className="post_date">{post.date}</div>
                </div>
            </div>
            <div className="post_content">{post.content}</div>
        </div>
        <img className="post_image" src={post.image} alt="Post" width="85%"/> 
        <div className="statistics">
            <span className="statistics_comments" onClick={toggleComment}>{post.comments}</span>
            <span className="statistics_shares" onClick={toggleShares}>{post.shares}</span>
            <span className="statistics_likes" onClick={toggleLike}>{post.likes}</span>
            <span className="statistics_save"></span>
        </div>
    </div>
    )
}

export default PostItem;