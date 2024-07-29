import React from "react"

export default function WindowTracker() {
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
    
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            console.log("Resized")
        })
    }, [])
    
    return (
        <h1>Window width: {window.innerWidth}</h1>
    )
}
