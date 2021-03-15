import {useState} from "react";

export function Forms(props) {
    const [isGoing, setIsGoing] = useState(true);
    const [isNum, setIsNum] = useState(2);

    const handleChanges = (e) => e.target.type === "checkbox" ? setIsGoing(!isGoing) : setIsNum(e.target.value);

    return(
        <div>
            <form action="">
                <input type="checkbox" checked={isGoing} onChange={handleChanges}/>
                <input type="number" value={isNum} onChange={handleChanges}/>
            </form>
        </div>
    )
}