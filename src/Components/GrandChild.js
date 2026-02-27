import React from "react";

function GrandChild({themeMode})
{
    const grandChildStyle = 
    {
        backgroundColor: themeMode === "light"? "lightyellow" : "darkgray",
        color: themeMode === "light"? "black" : "white",
        padding: "10px",
        marginTop: "15px"
    };

    return(
        <div style={grandChildStyle}>
            <h3>GrandChild Component</h3>
            <p>Theme applied to third level</p>
        </div>
    );
}
export default GrandChild;