import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor" 
import prism from "prismjs"
import Markdown from "react-markdown"
import axios from "axios"

import './App.css'

function App() {
  const [code, setCode] = useState(`
  function sum(){
    return 1 + 1
  }
  `)

  const [review, setReview] = useState("")

  useEffect(() => {
    prism.highlightAll()
  }, [])

  // ✅ Review Code Function
  async function reviewCode() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ai/get-review`, 
        { code }
      )
      setReview(response.data)
    } catch (error) {
      console.error("Error fetching review:", error)
      setReview("⚠️ Failed to fetch review. Please try again.")
    }
  }

  return (
    <>
      <main>
        {/* Left side: Code Editor */}
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(newCode) => prism.highlight(newCode, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                border: "1px solid #100f0fff",
                borderRadius: "5px",
              }}
            />
          </div>

          {/* Review Button */}
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>

        {/* Right side: AI Review */}
        <div className="right">
          <Markdown
            style={{
              fontSize: 14
            }}
          >
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
