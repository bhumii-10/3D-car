import  React from "react";

function DateTime()
{
const now=  new Date();
const time= now.toTimeString();
const date= now.toDateString();

return(
    <div>
    <h1>Date and Time</h1>
    <h2>{date}</h2>
    <h2>{time}</h2>
    </div>
);
}

export default  DateTime;