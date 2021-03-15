import {useState} from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export function Lifting_State_Up(props) {
    const [cel, setCel] = useState("");
    const [far, setFar] = useState("");
    const handelChange = (e) => {
        if (e.target.name === "cel") {
            setCel(e.target.value);
            setFar((+cel * 9 / 5) + 32)
        } else {
            setFar(e.target.value);
            setCel((+far - 32) * 5 / 9)
        }

    };
    const handelClick = () => {

    };

    return(
        <div>
            Cel: <input type="number" value={cel} onChange={handelChange} name={"cel"}/>
            Far: <input type="number" value={far} onChange={handelChange} name={"far"}/>
            <button onClick={handelClick}>Convert</button>
            <p>
            {
                cel >= 100 ? "The water would boil." :  "The water would not boil."
            }
            </p>
        </div>
    )

}