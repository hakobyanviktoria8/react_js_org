import React from "react";

export function ForwardingRefs(props) {
    const ref = React.createRef();

    return(
        <FancyButton
            label="Click Me"
            handleClick={handleClick}
            ref={ref}
        />;
    )
}


const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} style={{border:"1px solid red"}}>
        {props.children}
    </button>
));

