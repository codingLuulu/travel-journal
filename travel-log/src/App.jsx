import React from 'react'
import './index.css'
import Data from './data'
import Nav from './components/Nav'
import TravelCard from './components/Card'
import OtherLocations from './components/OtherLocations'
import OtherPlaces from './otherLocationData'

function App() {
  const travelDataList = Data;
  const travelData = travelDataList.map((data)=> {
    return <TravelCard 
              key='data.id'
              title={data.title}
              locationIcon = {data.locationIcon}
              location = {data.location}
              googleMaps = {data.googleMapsUrl}
              startDate = {data.startDate}
              endDate = {data.endDate}
              image = {data.imageUrl}
              altText = {data.altText}/>
  })

  const otherLocationList = OtherPlaces;
  const otherLocationData = otherLocationList.map((data)=> {
    return <OtherLocations
        key={data.location}
        location={data.location}/>
  })

  return (
    <div className="App">
      <Nav />
      {travelData}
        <h2 className="title">Other Locations</h2>
      <div className="other">
        {otherLocationData}
      </div>
    </div>
  )
}

export default App
