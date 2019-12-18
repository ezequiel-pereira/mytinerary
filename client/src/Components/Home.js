import React, { Component } from 'react';

import Header from './Header'
import Start from './Start'
import CitiesCarousel from './CitiesCarousel'
import Menu from './Menu'

import { connect } from 'react-redux'
import { googleLogin } from '../actions/loginAction';
import PropTypes from 'prop-types'

class Home extends Component {

  componentDidMount() {
    if (this.props.match.params && this.props.match.params.token) {
      localStorage.setItem('token', `${this.props.match.params.token}`)
      // console.log(localStorage.getItem('token'))
      this.props.googleLogin()
    }
  }
  
  render() {
    return (
        <div>
            <Menu></Menu>
            <Header></Header>
            <Start></Start>
            <CitiesCarousel></CitiesCarousel>
        </div>
    );
  }
}

Home.propTypes = {
  googleLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  login: state.login.login
})

export default connect(mapStateToProps, {googleLogin})(Home);