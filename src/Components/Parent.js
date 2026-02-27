import React, {useState} from "react";
import Child from "./Child.js";
import FlightDetails from "./FlightDetails.js";

function Parent()
{
    const [themeMode, setThemeMode]= useState('light');

    const toggleTheme= () =>
    {
        setThemeMode(themeMode === "light"? "dark" : "light");
    };

    const parentStyle = 
    {
        backgroundColor: themeMode === "light"? "white" : "black",
        color: themeMode === "light"? "black" : "white",
        padding: "20px"
    };

    return(
        <div style={parentStyle}>
            <h2>Parent Component</h2>

            <button onClick={toggleTheme}>
                Switch Theme
            </button>

            <Child themeMode= {themeMode}></Child>
            
            <FlightDetails />
        </div>
    );

}
export default Parent;