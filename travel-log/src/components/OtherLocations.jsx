import React from "react";

export default function OtherLocations(props){
    return(
        <section className="other">
            <ul className="location-list">
                <li>{props.location}</li>
                
            </ul>
        </section>
    )
}