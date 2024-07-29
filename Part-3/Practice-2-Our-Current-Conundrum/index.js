import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

/**
* Challenge 1: 
* Map over the thingsArray to generate
* a <p> element for each item and render them on the page
* below the button
*/

/**
 * Challenge 2: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
*/

function App() {
    const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    const handleAddItem = () => {
        const newItem = `New Thing ${thingsArray.length + 1}`
        setThingsArray([...thingsArray, newItem])
        console.log(setThingsArray)
    };

    return (
        <div>
            <button
                onClick={handleAddItem}
            >
                Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));