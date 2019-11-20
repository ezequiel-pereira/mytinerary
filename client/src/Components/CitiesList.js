import React from 'react'
import {Link} from 'react-router-dom'

const CitiesList = ({cities}) =>
  cities.map(city => <Link to={"/itineraries/" + city.name}><li key={city.name}>{city.name + ', ' + city.country}</li></Link>)

export default CitiesList