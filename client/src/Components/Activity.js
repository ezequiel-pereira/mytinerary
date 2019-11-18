import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Activity = ({activities}) =>
  activities.map(act => 
    <div>
        <img src={act.profilePic}/>
        <li>{act.title}</li>
    </div>)

/* class Activity extends Component {

	async componentDidMount() {
		this.props.getItineraries();
	}

  	render() {
		
		return( 
			<div>
                <h1>{this.props.itineraries.title}</h1>
			</div>
		)
	}
}

Activity.propTypes = {
	getItineraries: PropTypes.func.isRequired,
	//city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	itineraries: state.itineraries.itineraries
})*/

export default /* connect(mapStateToProps, {getItineraries})( */Activity//)