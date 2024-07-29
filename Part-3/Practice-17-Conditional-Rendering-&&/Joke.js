import React from "react"

export default function Joke(props) {
    /**
     * Challenge 1:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    /**
     * Challenge 2:
     * - Only display the punchline paragraph if `isShown` is true
     */
    const [isShown, setIsShown] = React.useState(false)
    
    function toggle() {
         setIsShown(prevIsShown => !prevIsShown);
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>Show Punchline</button>    
            <hr />
        </div>
    )
}