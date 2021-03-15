function FancyBorder(props) {
    return (
        <div style={{border: "3px solid"}}>
            {props.children}
        </div>
    );
}

export function Composition_Inheritance(props) {
    return(
        <FancyBorder>
            <h1>Welcome</h1>
        </FancyBorder>
    )
}