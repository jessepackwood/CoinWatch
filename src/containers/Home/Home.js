import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Search from '../Search/Search'
import PropTypes from 'prop-types'
import './Home.css'
import MarketCapCard from '../MarketCapCard/MarketCapCard'
import { PulseLoader } from 'react-spinners'

export class Home extends Component {
  constructor() {
    super()
    this.state = {
      coinsToDisplay: [],
      sortOrder: 'Highest',
      viewAll: false,
      subtitle: 'Top 100 coins by market cap (USD)'
    }
  }

  componentDidMount(props) {
    this.setState({coinsToDisplay: this.props.coins})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.coins.length !== this.props.coins.length) {
      this.setState({coinsToDisplay: this.props.coins.slice(0, 100)})
    }
    if (prevProps.searchInput !== this.props.searchInput) {
      return this.setState({coinsToDisplay: this.searchedCoinsToDisplay(this.props.searchInput) })
    }
  }

  handleView = () => {
    if (!this.state.viewAll) {
      this.setState({viewAll: true, subtitle: 'All coins listed by market cap (USD)', coinsToDisplay: this.props.coins})
    } else {
      this.setState({
        viewAll: false, subtitle: 'Top 100 coins by market cap (USD)', coinsToDisplay: this.props.coins.slice(0, 100)
      })
    }
  }

  handleSortClick = () => {
    if (this.state.sortOrder === 'Highest') {
      const highDayChangeCoins = this.props.coins
      this.setState({
        sortOrder: 'Lowest', 
        subtitle: 'Highest performing coins today',
        coinsToDisplay: highDayChangeCoins.sort((first, second) => {
          return second.changePercent24Hr - first.changePercent24Hr
        }).slice(0, 100)
      })
    } else {
      const lowDayChangeCoins = this.props.coins
      this.setState({
        sortOrder: 'Highest',
        subtitle: 'Lowest performing coins today',
        coinsToDisplay: lowDayChangeCoins.sort((first, second) => {
          return first.changePercent24Hr - second.changePercent24Hr
        }).slice(0, 100)
      })
    }
  }

  setToMarketCap = () => {
    const marketCapCoins = this.props.coins
    this.setState({
      subtitle: 'Top 100 coins by market cap (USD)',
      coinsToDisplay: marketCapCoins.sort((first, second) => {
        return second.marketCapUsd - first.marketCapUsd
      }).slice(0, 100)
    })
  }

  searchedCoinsToDisplay = (searchInput) => {
    return this.props.coins.filter( 
      coin => coin.name.toLowerCase()
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
        {this.props.coins.length === 0 && 
          <div className='spinner'>
            <PulseLoader 
              color={'orange'}
              size={25}
            />
          </div>
        }
        {this.props.coins.length > 0 &&
        <div className='home-page'>
          <div className='subtitle-wrapper'>
            <h3 className='home-page-subtitle'>
              {this.state.subtitle}
            </h3>
            <div className='filter-btn-wrapper'>
              <button 
                className='filter-btn view-button' 
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
        } 
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  coins: state.coins,
  searchInput: state.searchInput.value
})

Home.propTypes = {
  coins: PropTypes.array,
  searchInput: PropTypes.string
}

export default connect(mapStateToProps, null)(Home)