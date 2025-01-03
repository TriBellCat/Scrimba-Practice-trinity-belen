import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    /**
     * Challenge:
     * If the star is filled, add an aria-label of "Unmark as favorite".
     * Otherwise, use the aria-label of "Mark as favorite".
     */

    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    
    return (
        <button
            onClick={props.handleClick}
            aria-label={buttonLabel}
        >
            <img
                src={`../images/${starIcon}`}
                className="card--favorite"
            />
        </button>
    )
}
