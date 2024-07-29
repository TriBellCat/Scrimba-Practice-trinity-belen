import React from "react"

/**
* Challenge 1:
* Add our new function to the button
**/

/**
* Challenge 2: 
* Log something to the console when the mouse hovers over the image
*/

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }


    function hoverLog() {
        console.log("I was hovered!")
    }

    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" onMouseOver={hoverLog} />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
