import CommentBox from "./CommentBox"
import './CommentThread.css'

function CommentThread({comment, currentUser}) {


    
    return (

        <>

            <CommentBox 
            userImage={comment.user.image.png}
            username={comment.user.username}
            date={comment.createdAt}
            content={comment.content}
            scoreInit={comment.score} 
            currentUser={currentUser} />

            {comment.replies.length > 0 && (
                <div className="replies">
                    {comment.replies.map((reply, index) => {
                         return(<CommentBox key={index}
                         userImage={reply.user.image.png}
                         username={reply.user.username}
                         date={reply.createdAt}
                         content={reply.content}
                         scoreInit={reply.score} 
                         repliedTo={reply.replyingTo} 
                         currentUser={currentUser} />)

                         
                    })}
                </div>
            )}

        </>
    )
}

export default CommentThread