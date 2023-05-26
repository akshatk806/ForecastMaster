import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import "./style.css"

const Temperature = () => {

    // state variable for the value that is going to be enter in input field
    const [searchValue, setSearchValue] = useState("New Delhi");    

    // state variable for temperature
    const [temperatureInfo, setTemperatureInfo] = useState([]);

    const getWeatherInfo = async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=0fced3f07d371271b167d454426a8ead&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.weather[0].main);

            // object destruturing
            const {temp, humidity, pressure} = data.main;           // temperature in celcius from API

            const {main:weathermood} = data.weather[0];  // for weather mood (clouds and all)

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

        {/* passing the props to weather card*/}
        <WeatherCard {...temperatureInfo}/>
    </>
  )
}

export default Temperature