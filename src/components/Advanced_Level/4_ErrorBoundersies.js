import React,{useState} from "react";

export function ErrorBoundersing(props) {
    const [err, setErr] = useState(null);
    const handleClick = () => {
        try{
            console.log("hi")
        } catch (e) {
            setErr(e)
        }
    };
    return(
        <div>
            {err && <h1>Caught an error.</h1>}
            <button onClick={handleClick}>Click</button>
        </div>
    )
}