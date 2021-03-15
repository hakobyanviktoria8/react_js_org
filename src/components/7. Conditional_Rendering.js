import React, { useState } from "react";

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Conditional_Rendering(props) {
    const [bool, setBool] = useState(false);
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    return(
        <div>
            <h2>7. Conditional Rendering</h2>
            <p>{bool ? <UserGreeting/> : <GuestGreeting/> }</p>
            <p>{bool && `You have ${messages.length} unread messages.`}</p>
            <button onClick={()=>setBool(!bool)}>{bool ? "Logout" : "Login"}</button>
        </div>
    )
}
export default Conditional_Rendering;