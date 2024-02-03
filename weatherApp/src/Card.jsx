import React from 'react'
import './Card.css'
export default function Card(props)  {
	console.log(props)
  return (
    <>
		<div className="card">
			<div className="city-heading">
			{props.location.name.toUpperCase()}
			</div>
			<div className="card-body">
				<div className="card-content">

				<img src={props.current.condition.icon} alt="" />
				<div className="temp">
					<p>Temprature</p>
					<p>{props.current.temp_c}°C/{props.current.temp_f}°F</p>
				</div>
				<div className="temp">
					<p>Condition</p>
					<p>{props.current.condition.text}</p>
				</div>
				<div className="temp">
					<p>Wind Speed</p>
					<p>{props.current.wind_kph}km/h</p>
				</div>
				<div className="temp">
					<p>Humidity</p>
					<p>{props.current.humidity}%</p>
				</div>
				<div className="temp">
					<p>Cloud Coverage</p>
					<p>0%</p>
				</div>
				<div className="temp">
					<p>Last Update</p>
					<p>{props.current.last_updated}</p>
				</div>
				</div>
			</div>
		</div>
    </>
  )
}
