import React , { useState , useEffect } from "react";
import "../styles/displayTime.css"

function DisplayTime(){
    const [time,setTime] = useState( new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return (
        <React.Fragment>
            <div className="timeBox">
                <h2>{`Current Time ${hours}:${minutes}:${seconds}`}</h2>
            </div>
        </React.Fragment>
    )
}
export default DisplayTime