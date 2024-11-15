import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

import './OurBranches.css'

// Branches data
const branches = [
  {
    city: 'Pune',
    address:
      '1st Floor,101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027',
    position: { lat: 18.586392186498944, lng: 73.78140166973165 },
    mapLink: 'https://maps.app.goo.gl/DNwzKa2Yt1WB6zUB7',
  },
  {
    city: 'Mumbai',
    address:
      'Office No. 806, 8th Floor, Paradise Tower, next to MCDonalds, Naupada, Thane West, Mumbai, Thane, Maharashtra 400601',
    position: { lat: 19.1877496131839, lng: 72.97525703071106 },
    mapLink: 'https://maps.app.goo.gl/QABRjB87mA79aSyN9',
  },
  {
    city: 'Raipur',
    address: 'New Panchsheel Nagar, Civil Lines, Raipur, Chhattisgarh 492001',
    position: { lat: 21.237314571201736, lng: 81.6539475802003 },
    mapLink: 'https://maps.app.goo.gl/1KA1uhcyoF5Tu4Mg6',
  },
]

const Branches = () => {
  const containerStyle = {
    width: '100%',
    height: '200px', // Try adjusting the height if needed
  }

  return (
    <div className="branches-section">
      <h2 className="branches-title">OUR BRANCHES</h2>
      <div className="branches-container">
        {branches.map((branch, index) => (
          <div className="branch-card" key={index}>
            <h3>{branch.city}</h3>
            {/* Google Map */}
            <div className="map-container">
              {' '}
              <LoadScript googleMapsApiKey="AIzaSyBFIgzMyeDZhUn9y8TczvZlW8i2ErR-B3s">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={branch.position}
                  zoom={13}
                >
                  <Marker position={branch.position} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="add2">
              <a
                href={branch.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {branch.address}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Branches
