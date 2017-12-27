import React, { Component } from 'react'
import { fetchCoins } from '../../actions'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import './Home.css'

import Card from '../Card/Card'

class Home extends Component {

  async componentDidMount() {
    this.props.handleCoinFetch();
  }

  render() {
    return (
      <div className='home-page'>
        <h1 className='home-title'>Home</h1>
        <Card />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleCoinFetch: () => {
      dispatch(fetchCoins())
    }
  }
}

Home.propTypes = {
  handleCoinFetch: propTypes.func,
  coins: propTypes.array
}

export default connect(mapStateToProps, mapDispatchProps)(Home)