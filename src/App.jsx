import CommentBox from './CommentBox.jsx'
import data from './data.json'
function App() {

  // console.log(data.comments[0].user.image)

  return (
    <>
      <CommentBox 
        userImage={data.comments[0].user.image.png}
        username={data.comments[0].user.username}
        date={data.comments[0].createdAt}
        content={data.comments[0].content}
        score={data.comments[0].score}/>
    </>
  )
}

export default App
