import React from "react";

export default function Log(props) {
    return (
        <div class="log-table">
            <div>{props.data}</div> 
            <div>{props.start}</div> 
            <div>{props.finish}</div>
        </div>
    );
}

// const log = props => {
//     return (
//         <div class="log-table">
//             <div>{props.data}</div> 
//             <div>{props.start}</div> 
//             <div>{props.finish}</div>
//         </div>
//     );
// }

// export default log;