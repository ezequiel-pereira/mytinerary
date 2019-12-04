import React, {Component} from 'react'
import '../styles/Activity.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'

import {connect} from 'react-redux'
import {getActivitiesByItineraryId} from '../actions/activitiesAction'
import PropTypes from 'prop-types'

class Activity extends Component {

	async componentDidMount() {
		/* let itineraryId = this.props.itineraryId
		console.log("componenent   " +  itineraryId)
		this.props.getActivitiesByItineraryId(itineraryId) */
	}

	render() {
		return (
			<div>
				<h6 className="Activities-title">Activities</h6>
				<Container className="Activities">
					<Container className="Activities-carousel">
						{
						this.props.activity.map( act =>
							<Container className="Activity" key={act._id}>
								{act.name}
							</Container>)
						}
					</Container>
				</Container>
			</div>)
	}
}

Activity.propTypes = {
	getActivitiesByItineraryId: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	activities: state.activities.activities
})

export default connect(mapStateToProps, {getActivitiesByItineraryId})(Activity)