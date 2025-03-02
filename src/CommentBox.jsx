import { useState } from 'react'
import './CommentBox.css'

function CommentBox({userImage, username, date, content, scoreInit, repliedTo, currentUser}) {

    const [score, setScore] = useState(scoreInit)

    

    function PlusClick() {
        setScore(score + 1)
    }

    function MinusClick() {
        setScore(score - 1)
    }

    return (
        <div className="comment-box">

            <div className="info-container">
                <img className="user-image" src={userImage} alt={username}></img>
                <h2 className="username">{username}</h2>
                <p className="created-at">{date}</p>
            </div>

            <p className="content">{repliedTo!=undefined && (<span className="replying-to">@{repliedTo}</span>)} {content}</p>

            <div className="buttons-container">
                <div className="score-container">
                    <button onClick={PlusClick}><img src="./images/icon-plus.svg"></img></button>
                    <p className="score">{score}</p>
                    <button onClick={MinusClick}><img src="./images/icon-minus.svg"></img></button>
                </div>

                {username == currentUser ? 
                <div className="edit-delete-container">
                    <button><img src="./images/icon-delete.svg"></img>
                    <p className="delete-text">Delete</p></button>

                    <button><img src="./images/icon-edit.svg"></img>
                    <p className="edit-text">Edit</p></button>
                </div> 
                :
                <div className="reply-container">
                    <button><img src="./images/icon-reply.svg"></img></button>
                    <p className="reply-text">Reply</p>
                </div> }
            </div>
            
        </div>
    )
}

export default CommentBox