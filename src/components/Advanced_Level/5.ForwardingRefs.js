import React from "react";

export function ForwardingRefs(props) {
    const myref = React.createRef();

    return(
        <div>
            <FancyButton ref={myref}>Click me!</FancyButton>
            <Parent/>
        </div>
    )
}


const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} style={{border:"1px solid red"}}>
        {props.children}
    </button>
));

function MyFunctionComponent() {
    return <input />;
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    render() {
        // This will *not* work!
        return (
            <MyFunctionComponent ref={this.textInput} />
        );
    }
}