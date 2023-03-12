import React from "react";

export default function TravelCard(props) {
    return(
        <main className="card">
            <div className="card-content">
                <img src={props.image} alt={props.altText} className="card-img"/>
                <div className="card-textContent">
                    <div className="location">
                        <img src="location-pin.png" alt="location-icon" />
                        <p className="location-subtitle">{props.location}</p>
                        <a href={props.googleMaps} className="mapUrl">view on Google Map</a>
                    </div>
                    <h1 className="title">{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="desc">{props.desc}</p>

                </div>
            </div>
            <hr />
        </main>
    )
}