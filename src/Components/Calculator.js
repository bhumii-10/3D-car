import React, {useState} from "react";

function Calculator()
{
    const [num1, setNum1]= useState('');
    const [num2, setNum2]= useState('');
    const [result, setresult]= useState('');

    const add = ()=> 
    {
        setresult(Number(num1) + Number(num2));
    };

    const subtract = ()=> 
    {
        setresult(Number(num1) - Number(num2));
    };

    const multiply = ()=> 
    {
        setresult(Number(num1) * Number(num2));
    };

    const divide = ()=> 
    {
        if(num2 == 0)
        {
            setresult("Cannot divide by zero!");
        }
        else
        {
            setresult(Number(num1) / Number(num2));
        }
    };

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Calculator</h2>

        <input
        type="number"
        placeholder="Enter first number"
        value= {num1}
        onChange={(e)=> setNum1(e.target.value)}
        />
        <br/><br/>

        <input
        type="number"
        placeholder="Enter second number"
        value= {num2}
        onChange={(e)=> setNum2(e.target.value)}
        />
        <br/><br/>

        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>

        <h3>Result: {result}</h3>
        </div>
    );
}
export default Calculator;