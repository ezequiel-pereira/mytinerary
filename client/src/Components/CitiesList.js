import React from 'react'

const CitiesList = ({cities}) =>
  cities.map(city => <li key={city}>{city.city + city.country}</li>)

export default CitiesList