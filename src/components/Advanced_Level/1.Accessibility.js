import React from "react";

export function Accessibility(props) {
    let inputRef = React.createRef();
    return(
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}
// this.inputRef.current.focus();