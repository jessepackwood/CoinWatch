import React, { Component } from 'react'
import { fetchCoinFront } from '../../services/coinCapServices'
import './Home.css'
import Card from '../Card/Card'

class Home extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    fetchCoinFront()
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
    fetchCoinFront: () => {
      dispatch(fetchCoinFront)
    }
  }
}

export default Home;