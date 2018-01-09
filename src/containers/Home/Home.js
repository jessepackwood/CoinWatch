import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Search from '../Search/Search'
import PropTypes from 'prop-types'
import './Home.css'
import MarketCapCard from '../MarketCapCard/MarketCapCard'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      coinsToDisplay: [],
      sortOrder: 'Highest',
      viewAll: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchInput !== '') {
      return this.setState({coinsToDisplay: this.searchedCoinsToDisplay(nextProps.searchInput) })
    }
    this.setState({coinsToDisplay: nextProps.coins.slice(0, 100)})
  }

  handleView = () => {
    if (!this.state.viewAll) {
      this.setState({viewAll: true, coinsToDisplay: this.props.coins})
    } else {
      this.setState({
        viewAll: false, coinsToDisplay: this.props.coins.slice(0, 100)
      })
    }
  }

  handleSortClick = () => {
    if (this.state.sortOrder === 'Highest') {
      this.setState({
        sortOrder: 'Lowest', 
        coinsToDisplay: this.props.coins.sort((first, second) => {
          return second.cap24hrChange - first.cap24hrChange
        }).slice(0, 100)
      })
    } else {
      this.setState({sortOrder: 'Highest', 
        coinsToDisplay: this.props.coins.sort((first, second) => {
          return first.cap24hrChange - second.cap24hrChange
        }).slice(0, 100)
      })
    }
  }

  setToMarketCap = () => {
    this.setState({coinsToDisplay: this.props.coins.sort((first, second) => {
      return second.mktcap - first.mktcap
    })
    })
  }

  searchedCoinsToDisplay = (searchInput) => {
    return this.props.coins.filter( 
      coin => coin.long.toLowerCase()
        .includes(searchInput.toLowerCase())
    )
  }

  render() {
    const mappedCoins = this.state.coinsToDisplay.map( (coin, index) => { 
      return <MarketCapCard
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
          <div className='subtitle-wrapper'>
            <h3 className='home-page-subtitle'>
            Top 100 Currencies by market cap
            </h3>
            <div className='filter-btn-wrapper'>
              <button 
                className='filter-btn' 
                onClick={this.handleView} 
              > 
                {this.state.viewAll ? 'Top 100' : 'View All'} 
              </button>
              <button 
                className='filter-btn' 
                onClick={this.handleSortClick} 
              >
                {`Sort: ${this.state.sortOrder}`}
              </button>
              <button 
                className='filter-btn' 
                onClick={this.setToMarketCap} 
              >
              Market Cap
              </button>
            </div>
          </div>
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
  coins: PropTypes.array,
  searchInput: PropTypes.string
}

export default connect(mapStateToProps, null)(Home)