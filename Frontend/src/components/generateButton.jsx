import React from "react";
import "../styles/generateButton.css";

function GenerateButton({onClick}){
    return(
        <React.Fragment>
            <div>
                <button className="generate-button" onClick={onClick}>Generate ✨</button>
            </div>
        </React.Fragment>
    )
}
export default GenerateButton;