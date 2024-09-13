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
    const lightClasses = {red: "red light", yellow: "yellow light", green: "green light", purple: "purple light"}
    
    const [lights, setLights] = useState(lightClasses)

    const lighted = (color) => {
        if (color === "red"){
            setLights({
                red: "red light selected",
                yellow: "yellow light",
                green: "green light",
                purple: "purple light"
            });
        }
        else if (color === "yellow"){
            setLights({
                red: "red light",
                yellow: "yellow light selected",
                green: "green light",
                purple: "purple light"
            })
        }
        else if (color === "green"){
            setLights({
                red: "red light",
                yellow: "yellow light",
                green: "green light selected",
                purple: "purple light"
            })
        }
        else if (color === "purple"){
            setLights({
                red: "red light",
                yellow: "yellow light",
                green: "green light",
                purple: "purple light selected"
            })  
        }
    }

    const lightsOff = () => {
        setLights({red: "red light", yellow: "yellow light", green: "green light", purple: "purple light"})
    }

    const rotateLight = () => {
        if (purple === false){
            if (lights.red === "red light selected" ){
                setLights({
                    red: "red light",
                    yellow: "yellow light",
                    green: "green light selected",
                    purple: "purple light"
                })
            }
            else if (lights.green === "green light selected"){
                setLights({
                    red: "red light",
                    yellow: "yellow light selected",
                    green: "green light",
                    purple: "purple light"
                })
            }
            else if (lights.yellow === "yellow light selected"){
                setLights({
                    red: "red light selected",
                    yellow: "yellow light",
                    green: "green light",
                    purple: "purple light"
                })
            }
        }
        else if (purple === true){
            if (lights.red === "red light selected" ){
                setLights({
                    red: "red light",
                    yellow: "yellow light",
                    green: "green light",
                    purple: "purple light selected"
                })
            }
            else if (lights.green === "green light selected"){
                setLights({
                    red: "red light",
                    yellow: "yellow light selected",
                    green: "green light",
                    purple: "purple light"
                })
            }
            else if (lights.yellow === "yellow light selected"){
                setLights({
                    red: "red light selected",
                    yellow: "yellow light",
                    green: "green light",
                    purple: "purple light"
                })
            }
            else if (lights.purple === "purple light selected"){
                setLights({
                    red: "red light",
                    yellow: "yellow light",
                    green: "green light selected",
                    purple: "purple light"
                })
            }
        
    }}

    let [purple, setPurple] = useState(false)

    const togglePurple = () => {
        if (purple === false){setPurple(true)}
        else if (purple === true){setPurple(false)}
    }

    const purpleLight = () => {
        if (purple === true){
            
            return (
                <div>
                    <div style={lightStyle}>
                        <div className={lights.green} onClick={() => lighted("green")}></div>
                    </div>
                    <div className="bottom" style={lightStyle}>
                        <div className={lights.purple} onClick={() => lighted("purple")}></div>
                    </div>
                </div>
            )    
        }
        else return (<div className="bottom" style={lightStyle}>
            <div className={lights.green} onClick={() => lighted("green")}></div>
        </div>)
    }

	return (
		<div >
			<div style={poleStyle}></div>
			<div className="top" style={lightStyle}>
                <div className={lights.red} onClick={() => lighted("red")}></div>
            </div>
            <div style={lightStyle}>
                <div className={lights.yellow} onClick={() => lighted("yellow")}></div>
            </div>
            {purpleLight()}
            <div>
                <button className="mt-5 button" onClick={lightsOff}>
                    Lights off!
                </button>
            </div>
            <div>
                <button className="mt-2 button" onClick={rotateLight}>
                    Cycle light!
                </button>
            </div>
            <div>
                <button className="mt-2 button" onClick={togglePurple}>
                    Toggle Purple!
                </button>
            </div>
        </div>
		
	);
};

export default TrafficLight
