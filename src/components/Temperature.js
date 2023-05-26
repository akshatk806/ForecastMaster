import React, { useEffect, useState } from 'react'
import "./style.css"

const Temperature = () => {

    // state variable for the value that is going to be enter in input field
    const [searchValue, setSearchValue] = useState("New Delhi");    

    // state variable for temperature
    const [temperatureInfo, setTemperatureInfo] = useState([]);

    const getWeatherInfo = async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0fced3f07d371271b167d454426a8eaa&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);

            // object destruturing
            const {temp, humidity, pressure} = data.main;           // temperature in celcius from API

            const {main : weathermood} = data.weather[0].main;  // for weather mood (clouds and all)

            const {name} = data;

            const {speed} = data.wind

            const {country, sunset} = data.sys;

            // our own object
            const myNewWeatherInfo = {
                temp, 
                humidity, 
                pressure,
                weathermood,
                name, 
                speed, 
                country, 
                sunset
            }

            setTemperatureInfo(myNewWeatherInfo);
            setSearchValue("");
        } 
        catch(error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{
        getWeatherInfo();
    },[]);       // passing the empty array it means ki ab me sirf page ko refresh karu first time to hi useEffect ke andar jo h wo run ho else na ho

  return (
    <>
        {/* search bar */}
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search..." autoFocus id="search" className="seachTerm" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
            </div>
        </div>

        {/* container of weather details, temperature card */}
        <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>25.5&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">
                        sunny
                    </div>
                    <div className="place">
                        Delhi, India
                    </div>
                </div>
            </div>
            <div className="date">
                {new Date().toLocaleString()}
            </div>


            {/* our 4 columns section */}
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-sunset"}></i></p>
                        <p className="extra-info-leftside">
                            19.19 PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p><i className={"wi wi-humidity"}></i></p>
                        <p className="extra-info-leftside">
                            19.19 PM <br />
                            Humidity 
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p><i className={"wi wi-rain"}></i></p>
                        <p className="extra-info-leftside">
                            19.19 PM <br />
                            Pressure 
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p><i className={"wi wi-strong-wind"}></i></p>
                        <p className="extra-info-leftside">
                            19.19 PM <br />
                            Speed 
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default Temperature