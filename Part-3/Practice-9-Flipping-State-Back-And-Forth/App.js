import React from "react"

/**
 * Challenge 1: 
 * - Initialize state for `isGoingOut` as a boolean
 * - Make it so clicking the div.state--value flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
 */

/**
 * Challenge 2: 
 * - Initialize state for `isGoingOut` as a boolean
 * - Make it so clicking the div.state--value flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
 */

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    function toggle () {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut);
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={toggle}>
                <h1>{isGoingOut ? "Yes":"No"}</h1>
            </div>
        </div>
    )
}
