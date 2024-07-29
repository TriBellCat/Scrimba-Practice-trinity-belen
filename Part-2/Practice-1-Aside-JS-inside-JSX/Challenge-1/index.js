import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     */
    return (
        <h1>Hello {firstName} + " " + {lastName}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))