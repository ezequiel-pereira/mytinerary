import React, {Component} from 'react';

import Header from './Header'
import Start from './Start'
import CitiesCarousel from './CitiesCarousel'
import Menu from './Menu'

import {connect} from 'react-redux'
import { login } from '../actions/loginAction';
import PropTypes from 'prop-types'


class Home extends Component {

  getToken() {
    let token = this.props.match.params.token
    login(token)
  }
  
  render() {
    return (
        <div>
          {this.getToken()}
            <Menu></Menu>
            <Header></Header>
            <Start></Start>
            <CitiesCarousel></CitiesCarousel>
        </div>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  login: state.login.login
})

export default connect(mapStateToProps, {login})(Home);
