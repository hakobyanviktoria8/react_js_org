import React from "react";

export function FragmentComp(props) {
    const items = [{id:1, term: "hi", description: "lorem3"},{id:1, term: "hi", description: "lorem3"}];
    return (
        <dl>
            {items.map(item => (
                // Without the `key`, React will fire a key warning
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}