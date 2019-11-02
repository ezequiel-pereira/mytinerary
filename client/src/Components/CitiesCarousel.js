import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

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