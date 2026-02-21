import React from "react";
import "../styles/displayDate.css"

function DisplayDate(){
    let CurrentDate = new Date();
    let day = CurrentDate.getDate();
    let month = CurrentDate.getMonth() + 1;
    let year = CurrentDate.getFullYear();

    return (
        <React.Fragment>
            <div className="dateBox">
                <h2>{`Current Date ${day}/${month}/${year}`}</h2>
            </div>
        </React.Fragment>
    )

}

export default DisplayDate;
