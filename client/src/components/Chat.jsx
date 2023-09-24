import React, { useState } from "react";
import './Chat.css'
import userImg from "../images/user.png";
import botImg from "../images/bot.png";
import loadingImg from "../images/loader.svg";
import sendImg from "../images/send.svg"

const Chat = () => {
    const [input, setInput] = useState("");
    const [post, setPost] = useState([]);

    const handleSubmit = () => {
        if(input.trim() === "") return;
        updatePosts(input)
    }
    const updatePosts = ( post ) => {
        setPost(prevState => {
            return [
                ...prevState,
                { type:'user', post: post }
            ]
        })
    }
    const onKeyUp = (e) => {
        if(e.key === 'Enter' || e.which === 13)
        {
            handleSubmit();
        }
    }

    return (
        <div className="chat-sec">
            <div className="chat-container">
                <div className="chat-layout">
                    {post?.map((post, index) => (
                        <div key={index} className={`chat-bubble ${post.type === "bot" || post.type === "loading" ? "bot" : ""}`}>
                            <div className="avatar">
                                {/* if post type is bot or loading it will show botImg otherwise userImg */}
                                <img
                                    src={
                                        post.type === "bot" || post.type === "loading"
                                            ? botImg
                                            : userImg
                                    }
                                    alt="userImg"
                                />
                            </div>
                            {post.type === "loading" ? (
                                <div className="loader">
                                    <img src={loadingImg} alt="loadingImg" />
                                </div>
                            ) : (
                                <div className="post">{post.post}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <input type="text" placeholder="Ask ANything!" className="composebar" autoFocus onChange={(e) => setInput(e.target.value)} onKeyUp={onKeyUp} />
                    <div className="send-button">
                        <img src={sendImg} alt="sendImg" onClick={handleSubmit}  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
