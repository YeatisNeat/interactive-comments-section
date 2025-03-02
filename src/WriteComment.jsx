import './WriteComment.css'

function WriteComment({userImage}) {
    return (
        <div className="write-comment">
            <textarea name="" id="" className="write-input" placeholder='Add a comment...'></textarea>
            <div className="write-bottom-container">
                <img src={userImage}></img>
                <button className="send-button">SEND</button>
            </div>
        </div>
    )
}

export default WriteComment