import React from "react";
import GrandChild from "./GrandChild";

function Child({themeMode})
{
    const childStyle = 
    {
        backgroundColor: themeMode === "light"? "lightgray" : "gray",
        color: themeMode === "light"? "black" : "white",
        padding: "15px",
        marginTop: "15px"
    };

    return(
        <div style={childStyle}>
            <h3>Child Component</h3>
            <GrandChild themeMode= {themeMode}></GrandChild>
        </div>
    );
}
export default Child;