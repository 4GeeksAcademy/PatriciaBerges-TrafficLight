import React, { useState } from "react";


const TrafficLight = () => {
	const poleStyle = {
		width: "8px",
		height: "100px",
		background: "black",
		margin: "auto"
	}
	const lightStyle = {
        width: "50px",
        height: "50px",
        background: "black",
        margin: "auto",
        position: "relative"
    }
    const lightClasses = {red: "red light", yellow: "yellow light", green: "green light"}
    
    const [lights, setLights] = useState(lightClasses)

    const lighted = (color) => {
        if (color === "red"){
            setLights({
                red: "red light selected",
                yellow: "yellow light",
                green: "green light"
            });
        }
        else if (color === "yellow"){
            setLights({
                red: "red light",
                yellow: "yellow light selected",
                green: "green light"
            })
        }
        else if (color === "green"){
            setLights({
                red: "red light",
                yellow: "yellow light",
                green: "green light selected"
            })
        }
    }

	return (
		<div>
			<div style={poleStyle}></div>
			<div className="top" style={lightStyle}>
                <div className={lights.red} onClick={() => lighted("red")}></div>
            </div>
            <div className="center" style={lightStyle}>
                <div className={lights.yellow} onClick={() => lighted("yellow")}></div>
            </div>
            <div className="bottom" style={lightStyle}>
                <div className={lights.green} onClick={() => lighted("green")}></div>
            </div>
		</div>
		
	);
};

export default TrafficLight;
