import React, {useContext} from "react";

const ThemeContext = React.createContext('light');


function Foo1(props) {
    return (
        <div>
            <h2>{}</h2>
            <h1>Foo1</h1>
            <p>{props.foo1}</p>
            <hr/>
            <hr/>
            <hr/>
            <ThemedButton/>
            <hr/>
            <Foo2 foo2={props.foo1}/>
        </div>
    )
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <div>
                <h1>Foo2</h1>
                <hr/>
                <p>{this.context}</p>
            </div>
        )
    }
}

function Foo2(props) {
    const theme  = useContext(ThemeContext);
    return (
        <div>
            <h1>Foo2</h1>
            <p>{props.foo2}</p>
            <hr/>
            <p>{theme}</p>
        </div>
    )
}

function Foo(props) {
    let a = "hello";
    return (
        <div>
            <h1>Context</h1>
            <Foo1 foo1={a}/>
        </div>
    )
}

//use Context
export function Context(props) {

    return (
        <ThemeContext.Provider value={"dark"}>
            <Foo/>
        </ThemeContext.Provider>
    )
}