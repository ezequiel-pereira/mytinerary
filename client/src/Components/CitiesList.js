import React from 'react'

const CitiesList = ({cities}) =>
  cities.map(city => <li key={city.name}>{city.name + ', ' + city.country}</li>)

export default CitiesList