import CommentThread from './CommentThread.jsx'
import WriteComment from './WriteComment.jsx'
import data from './data.json'
import './App.css'

function App() {

  

  return (
    <div className="content">
      
      {data.comments.map((comment, index) => {
        return (
          <CommentThread comment={comment} currentUser={data.currentUser.username} key={index}/>
        )
         
      })}

      <WriteComment userImage={data.currentUser.image.png} />

    </div>
  )
}

export default App
