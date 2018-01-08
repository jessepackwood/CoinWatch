import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Search from '../Search/Search'
import PropTypes from 'prop-types';
import './Home.css'

import Card from '../Card/Card'

class Home extends Component {
  constructor(props) {
    super()
    console.log(props)
    this.state = {
      coinsToDisplay: [],
      sortOrder: 'ascending',
      viewAll: false
    }
  }



  componentWillReceiveProps(nextProps) {
    if(nextProps.searchInput !== '') {
      return this.setState({coinsToDisplay: this.searchedCoinsToDisplay() })
    }
    this.setState({coinsToDisplay: nextProps.coins.slice(0,100)})

  }

  handleView = () => {
    if(!this.state.viewAll) {
      this.setState({viewAll: true, coinsToDisplay: this.props.coins})
    } else {
      this.setState({viewAll: false, coinsToDisplay: this.props.coins.slice(0,100)})
    }
  }

  handleSortClick = () => {
    if (this.state.sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending', coinsToDisplay: this.props.coins.sort((a, b) => {
          return b.cap24hrChange - a.cap24hrChange
        }).slice(0, 100)
      })
    } else {
      this.setState({sortOrder: 'ascending', coinsToDisplay: this.props.coins.sort((a, b) => {
          return a.cap24hrChange - b.cap24hrChange
        }).slice(0, 100)
      })
    }
  }


  searchedCoinsToDisplay = () => {
    // debugger
      return this.props.coins.filter( coin => coin.long.toLowerCase().includes(this.props.searchInput.toLowerCase()))
  }
  // console.log(searchedCoinsToDisplay())
  render() {
    const mappedCoins = this.state.coinsToDisplay.map( (coin, index) => { 
      return <Card 
        coin={coin}
        key={`Card: ${index}`}
        number={`${index + 1}`}
      />
    })

    return (
      <div>
        <Header />
        <Search />
        <div className='home-page'>
          <h3>Top 100 Currencies by market cap</h3>
          <button onClick={this.handleView} > {this.state.viewAll ? 'Top 100' : 'View All'} </button>
          <button onClick={this.handleSortClick} >{`Sort: ${this.state.sortOrder}`}</button>
          {mappedCoins}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coins: state.coins,
  searchInput: state.searchInput.value
})

Home.propTypes = {
  coins: PropTypes.array
}

export default connect(mapStateToProps, null)(Home)