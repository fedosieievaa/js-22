import Anakin from "../assets/img/Anakin_Skywalker.jpeg";
import AnakinPost from "../assets/img/Ray_Skywalker.jpeg";
import Padmé_Amidala from "../assets/img/Padmé_Amidala.jpeg";
import PadméAmidalaPost from "../assets/img/sunset.jpeg";
import Leia_Organa from "../assets/img/Leia_Organa.jpeg";
import LeiaOrganaPost from "../assets/img/selfie.jpeg";
import { ADD_POST } from "./actions";

const post = [{
    name: "Anakin Skywalker",
    photo: Anakin,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: AnakinPost,
    date: "2020/09/27",
    comments: 82,
    shares: 46,
    likes: 87
}, {
    name: "Padmé Amidala",
    photo: Padmé_Amidala,
    nickname: "@amiii",
    content: "Look! What a SUNSET today😍",
    image: PadméAmidalaPost,
    date: "2021/03/24",
    comments: 30,
    shares: 19,
    likes: 37
}, {
    name: "Leia Organa",
    photo: Leia_Organa,
    nickname: "@leila_organa",
    content: "It's time to post selfie!!)",
    image: LeiaOrganaPost,
    date: "2021/12/01",
    comments: 65,
    shares: 29,
    likes: 43
}];

const initialState = {
    posts: post,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state;
    }
};