import React from "react";
import "../styles/displayName.css";

function DisplayName(){

    return(
        <React.Fragment>
            <div className="display-name-box">
                <span className="display-name-icon"> 🧑 </span>
                <div className="display-name">
                    <h2 className="textDesc2">  welcome amigo </h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DisplayName;