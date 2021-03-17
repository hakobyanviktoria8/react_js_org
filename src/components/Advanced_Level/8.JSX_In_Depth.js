import {useState} from "react";

export function JSXInDepth({n}) {
    let [messages, setMessage] = useState("");
    let [bool, setbool] = useState(false);
    return(
        <div>
            {n % 2 === 0 ? <strong>even</strong> : <i>odd</i>}
            <button onClick={() => {setMessage("hi"); setbool(!bool)}}>
                Hello World!
            </button>
            <p>{bool && messages}</p>
        </div>
    )
}