import React, { Component } from 'react'
import { fetchCoinFront } from '../services/coinCapServices'
import Card from './Card'

class Home extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    fetchCoinFront()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
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