import React from 'react';
import './style/WeatherInformation.css';
const Img = (props) => <img className="cloud" src={`${props.icon}`} alt="chmura"></img>


const WeatherInformation = (props) => {

    return(
        <div className="info">
            <h2>{props.date}</h2>
            <Img icon={props.icon} ></Img>
            <ul>
                <li>Temperatura: {props.temperature} °C</li>
                <li>Wiatr: {props.wind} km/h</li>
            </ul>
        </div>
    )
}

export default WeatherInformation;