import React from "react"

export default function App() {
     /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    
    const result = React.useState("Hello")
    const stateValue = React.useState("Yes");
    
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{stateValue}</h1>
            </div>
        </div>
    )
}
