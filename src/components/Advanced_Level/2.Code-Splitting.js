import React, { Suspense } from 'react';
import {add} from "./2_Math";
// import 2_OtherComponent from "./2_OtherComponent";
const OtherComponent = React.lazy(() => import('./2_OtherComponent'));


export  function Code_Splitting(props) {
    return(
        <div>
            {add(1,2)}
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    )
}