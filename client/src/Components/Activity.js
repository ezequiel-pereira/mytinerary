import React from 'react'
import '../styles/Activity.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
/* import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' */

const Activity = () =>{

  return (
    <div>
		<h6 className="Activities-title">Activities</h6>
		<Container className="Activities">
			<Container className="Activities-carousel">
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
				<Container className="Activity">
					Activity
				</Container>
			</Container>
		</Container>
	</div>)
}

export default Activity