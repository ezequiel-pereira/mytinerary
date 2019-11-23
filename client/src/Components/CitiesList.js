import React from 'react'
import {Link} from 'react-router-dom'

const CitiesList = ({cities}) =>
  cities.map(city => <Link key={city._id} to={"/itineraries/" + city.name}><li key={city._id}>{city.name + ', ' + city.country}</li></Link>)

export default CitiesList