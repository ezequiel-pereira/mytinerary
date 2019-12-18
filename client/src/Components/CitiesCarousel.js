import React, { Component } from 'react'
import '../App.css'
import { Row, Col, Carousel,Container } from 'react-bootstrap'

class CitiesCarousel extends Component {

  render() {
		return(
			<div className="Carousel">
				<Container>
					<p>Popular MYtineraries</p>
				
				<Carousel>
					<Carousel.Item>
						<Row>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
						</Row>
						<Row>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
						</Row>
					</Carousel.Item>
					<Carousel.Item>
						<Row>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
						</Row>
						<Row>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
						</Row>
					</Carousel.Item>
					<Carousel.Item>
						<Row>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
						</Row>
						<Row>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
							<Col><img src="https://picsum.photos/200" alt="city" /></Col>
						</Row>
					</Carousel.Item>
				</Carousel>
				</Container>
			</div>
		)
  }
}

export default CitiesCarousel