import CommentThread from './CommentThread.jsx'
import data from './data.json'
import './App.css'

function App() {

  

  return (
    <>
      {data.comments.map((comment, index) => {
        return (
          <CommentThread comment={comment} key={index}/>
        )
         
      })}
    </>
  )
}

export default App
