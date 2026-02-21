import React from "react";
import '../styles/inputText.css';

function InputText({Text , value="" , onChange}) {
    return (
    <React.Fragment>
        <div>
            <input type="text" className="input-container" value={value} onChange={onChange}  placeholder={Text}/>
        </div>
    </React.Fragment>
    )
}
export default InputText;