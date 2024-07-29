import React from "react"

export default function Box(props) {
    /*const [on, setOn] = React.useState(props.on)
    
    function toggle() {
         setOn(prevOn => !prevOn)
    }*/
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box" 
            onClick={props.toggle}
            //onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}