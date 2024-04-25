import React from 'react'

export default function Display(props) {


    let InnerItems = "";
    if (props.city == "") {
        InnerItems = <h3 className='text-center py-3'>Please Enter a City Name</h3>
    } else if (props.weatherData == null) {
        InnerItems = <h3 className='text-center py-3'>Loading...</h3>
    } else if (props.weatherData.cod == "404") {
        InnerItems = <h3 className='text-center py-3'>City not found</h3>
    } else {
        InnerItems = <div className='text-center'>
            <h1>{props.city}</h1>
            <img src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
            <div>
                <h2>{props.weatherData.main.temp}°C</h2>
                <h2>{props.weatherData.weather[0].main}</h2>
            </div>
        </div>
    }


    return (
        <div className="row mt-5">
            <div className="col-3">
                <h4 className='text-center'>History</h4>
                <ul>
                    {
                        props.historyData.map(
                            (h, i) => {
                                return <li style={{ cursor: "pointer" }} onClick={() => props.cityNameHandler(h)} key={i}>{h}</li>
                            }
                        )
                    }
                </ul>
            </div>
            <div className="col-9">
                <div className='card'>
                    {InnerItems}
                </div>
            </div>
        </div>
    )
}
