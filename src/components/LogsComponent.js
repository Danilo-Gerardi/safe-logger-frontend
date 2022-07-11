import React from "react";
import getTime from '../utils/GetTime';
import getDate from '../utils/GetDate';

export default function Log(props) {
    return (
        <div class="log-table">
            <div class="date">{getDate(props.date)}</div> 
            {props.times.map((element) => {
                return <div class="column">{getTime(element)}</div>
            })}
        </div>
    );
}