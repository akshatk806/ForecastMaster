import React from 'react'
import "./style.css"

const Temperature = () => {
  return (
    <>
        {/* search bar */}
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search..." autoFocus id="search" className="seachTerm"/>
                <button className="searchButton" type="button">Search</button>
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
        </article>
    </>
  )
}

export default Temperature