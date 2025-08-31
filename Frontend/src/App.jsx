import { useState , useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor" 

import prism from "prismjs"
import Markdown from "react-markdown"
import axios from 'axios'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`
  function sum(){
    return 1 + 1
}
`)


const [review , setReview] = useState()

  useEffect (() => {
    prism.highlightAll()
  }, [])

 async function reviewCode() {
   
  const response = await  axios.post('http://localhost:3000/ai/get-review', {code})  
     
  setReview(response.data)
 } 

  return (
    <>
     <main>
      <div className="left">
        <div className="code">
          <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize:12,
                  border: "1px solid #100f0fff",
                  borderRadius: "5px",
                }}
                />
        </div>
        <div 

      onClick={reviewCode}
        
       
       className="review">Review</div>
      </div>
      <div className="right">
         <Markdown
         style={{
          fontSize: 2

         }}
         >{review}</Markdown>
      </div>
      </main> 
    </>
  )
}

function sum(){
  return 1 + 1
}

export default App
