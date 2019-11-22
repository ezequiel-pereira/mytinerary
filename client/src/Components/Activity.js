import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Hashtags from './Hashtags'

const Activity = (activities) =>{

  return activities.activities.map(act =>
    <div>
			<Container>
				<Row>
					<Col>
						<Image src={act.profilePic} width="100px" height="100px" roundedCircle/>
						<p>Username</p>
					</Col>
					<Col>
						<Row>
							<h6>{act.title}</h6>
						</Row>
						<Row className="activity-info">
							<p>Likes: {act.rating}</p>
							<p>{act.duration} Hours</p>
							<p className="hashtags">{act.price}</p>
						</Row>
						<Hashtags hashtags={act.hashtags}></Hashtags>
					</Col>
				</Row>
			</Container>
	  </div>)
}

export default Activity