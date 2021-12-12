import React, { useState } from "react";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";

const CreatePost = ({ post }) => {
    const posts = useSelector((state) => state.posts);
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const getDate = () => {
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; 
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        return year + "/" + month + "/" + day;
    }
    const dispatch = useDispatch();

    const onCreate = (event) => {
        event.preventDefault();
        let i = null;
        if(document.getElementById('dart').selected){
            i = 0;
        }else if(document.getElementById('padmé').selected){
            i = 1;
        }else if  (document.getElementById('leila').selected){
            i = 2;
        }
        dispatch(addPost({
            name: post[i].name,
            photo: post[i].photo,
            nickname: post[i].nickname,
            content: content,
            image: image,
            date: getDate(),
            comments: 0,
            shares: 0,
            likes: 0
        }));
        setContent("");
        setImage("");
    }
    return(
        <>
        <form className="form" onSubmit={onCreate}>
            <input type="text" name="content" className="form_input" placeholder="Type post's text" value={content} onChange={(e) => setContent(e.target.value)}/>
            <input type="text" name="image" className="form_input" placeholder="Paste image's link" value={image}  onChange={(e) => setImage(e.target.value)}/>
            <select className="form_input">
                <option id="dart" value="@dart_vader">@dart_vader</option>
                <option id="leila" value="@leila_organa">@leila_organa</option>
                <option id="padmé" value="@padmé_amidala">@padmé_amidala</option>
            </select>
            <input type="submit" className="form_btn-create" value="Create post"/>
        </form> 
        { posts.map((post) => <PostItem post={post}/>)}
        </>
    )
}

export default CreatePost;