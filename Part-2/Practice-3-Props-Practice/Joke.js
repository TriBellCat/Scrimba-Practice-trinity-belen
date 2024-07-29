import React from "react"

export default function Joke(props) {
    console.log(props.comments)
    return (
        <div>
            <p style={{display: props.setup ? "block" : "none"}}>Question: {props.setup}</p>
            <p>Answer: {props.punchline}</p>
            <p>-----------------------------------------------------</p>
        </div>
        )
  
}