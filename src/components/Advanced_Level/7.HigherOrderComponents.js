import React from "react";

export function Higher_Order_Components(props) {
    const comments = ["Hi", "ki", "Mi"];

    return(
        <div>
            {comments.map((comment) => (
                withSubscription(<Comment comment={comment} key={comment} />)
            ))}
        </div>
    )
}



function withSubscription(Comment){

    return <FancyBorder>{Comment}</FancyBorder>
}

function Comment({comment}) {
    return(
        <p>{comment}</p>
    )
}

function FancyBorder(props) {
    return(
        <div style={{border:"1px solid red"}}>
            {props.children}
        </div>
    )
}