import React from "react";
import Parent from "./Components/Parent";
import PorscheViewer from "./Components/PorscheViewer";
import Porsche356 from "./Components/Porsche356";

function App()
{
  return(
    <div className="App">
      <PorscheViewer/><br></br>
      <Porsche356/>
    </div>
  );
}
export default App;