import React from "react"

/**
* Challenge 1: Set up state to track our count (initial value is 0)
*/

/**
 * Challenge 2: Create a function called `add` that runs
 * when the + button is clicked. (Can just console.log("add") for now)
 */

/**
 * Challenge 3: 
 * See if you can think of a way to add 1 to the count
 * every time the + button is clicked
 */

/**
 * Challenge 4: 
 * Add functionality to the minus button
 */

export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        //console.log("added!")
        setCount(count+1)
    } 

    function subtract() {
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <button 
                className="counter--minus"
                onClick={subtract}
            >
                –
            </button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button     
                className="counter--plus"
                onClick={add}
            >
                +
            </button>
        </div>
    )
}
