import React, {Component} from 'react'
import '../styles/Activity.css'
import Container from 'react-bootstrap/Container'

class Activity extends Component {

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
export default Activity