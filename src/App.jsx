import CommentBox from './CommentBox.jsx'
import data from './data.json'
import './App.css'

function App() {

  // console.log(data.comments[0].user.image)

  return (
    <>
      {data.comments.map((comment, index) => {
        return (<CommentBox key={index}
          userImage={comment.user.image.png}
          username={comment.user.username}
          date={comment.createdAt}
          content={comment.content}
          scoreInit={comment.score}
          replies={comment.replies}/>)
         
      })}
    </>
  )
}

export default App
