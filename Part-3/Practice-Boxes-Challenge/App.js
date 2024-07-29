import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    //props.darkMode = false

    /*const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc" 
    }*/

    function toggle(id) {
        //console.log(id)
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? { ...square, on: !square.on } : square
            })
        })
    }

const squareElements = squares.map(square =>
(
    /*<div 
        style={styles} 
        className="box" 
        key={box.id}
    >
    </div>*/
    <Box
        //id={square.id}
        key={square.id} 
        on={square.on} 
        toggle={() => toggle(square.id)}
        //toggle={toggle}
    />
)
)

return (
    <main>
        {squareElements}
    </main>
)
}
