import React, {useS, useState} from "react";

function Greetings()
{
    const [name, setName]= useState('');

    return(
        <div>
            <input type="text" 
            value= {name}
            placeholder="Enter your name"
            onChange={(e)=> setName(e.target.value)}/>
            <h1>{name && `Hello, ${name}`}</h1>
        </div>
    );
}
export default Greetings;