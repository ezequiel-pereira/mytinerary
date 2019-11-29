import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Itinerary.css'

import HomeButton from './HomeButton'
import Activity from './Activity'
import Menu from './Menu'

import {connect} from 'react-redux'
import {getItinerariesByCity} from '../actions/itinerariesAction'
import {getCityById} from '../actions/citiesAction'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Itinerary extends Component {

	state = {
		loading: false,
		city: {},
		itineraries: []
	};

	async componentDidMount() {
		let cityId = this.props.match.params.name
		this.props.getCityById(cityId)
		this.props.getItinerariesByCity(cityId)
	}

  	render() {
		return( this.state.loading ?
			<div className="App">
				"Cargando"
				<HomeButton></HomeButton>
			</div> :
			<div className="App">
				<Menu></Menu>
				<Container>
					<h1>{this.props.city.name}</h1>
					<h6>Availeable MYtineraries:</h6>
				</Container>
				{this.props.itineraries.map(itinerary => 
				<Container className="Itinerary">
					<Row>
						<Col /* sm={4} */>
							<Image src={itinerary.profilePic} width="50px" height="50px" roundedCircle/>
							<p>Username</p>
						</Col>
						<Col /* sm={6} */>
							<Row>
								<h6>{itinerary.title}</h6>
							</Row>
							<Row className="Itinerary-info">
								<p>Likes: {itinerary.rating}</p>
								<p>{itinerary.duration} Hours</p>
								<p>{itinerary.price}</p>
							</Row>
							<Row>
								{itinerary.hashtags.join('  ')}
							</Row>
						</Col>
					</Row>
					<Row>
					<Accordion defaultActiveKey="0" className="Accordion">
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey="1">
								View All
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
							<Card.Body>
								<Row>
									<Col>
										<Activity itineraryId={itinerary._id}></Activity>
									</Col>
								</Row>
							</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
					</Row>
				</Container>)}

				<HomeButton></HomeButton>
			</div>
		)
	}
}

Itinerary.propTypes = {
	getItinerariesByCity: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	city: state.cities.city,
	itineraries: state.itineraries.itineraries
})

export default connect(mapStateToProps, {getItinerariesByCity, getCityById})(Itinerary)
