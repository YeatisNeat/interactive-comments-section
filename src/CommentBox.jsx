function CommentBox({userImage, username, date, content, score}) {

    return (
        <div className="comment-box">
            
            <div className="info-container">
                <img src={userImage}></img>
                <h2 className="user-name">{username}</h2>
                <p className="created-at">{date}</p>
            </div>

            <p className="content">{content}</p>
            <p className="score">{score}</p>
        </div>
    )
}

export default CommentBox