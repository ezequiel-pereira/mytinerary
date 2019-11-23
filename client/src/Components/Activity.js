import React from 'react'
import '../styles/Activity.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Activity = () =>{

  return (
    <div>
		<Container>
			<Row className="Activities">
				<Col className="Activity">Activity</Col>
				<Col className="Activity">Activity</Col>
				<Col className="Activity">Activity</Col>
				<Col className="Activity">Activity</Col>
				<Col className="Activity">Activity</Col>
				<Col className="Activity">Activity</Col>
			</Row>
		</Container>
	</div>)
}

export default Activity