import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Start from './Start'
import HomeButton from './HomeButton'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
//import start from '../img/start.png'

class Cities extends Component {

  render() {
		return(
			<div className="App">
				<Header></Header>
				<Start></Start>
				<p>Popular MYtineraries</p>
				<Carousel className="Carousel">
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
			<HomeButton></HomeButton>
			</div>
		)
  }
}

export default Cities