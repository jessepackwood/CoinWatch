import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Search from '../Search/Search'
import PropTypes from 'prop-types'
import './Home.css'
import MarketCapCard from '../MarketCapCard/MarketCapCard'

class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      coinsToDisplay: [],
      sortOrder: 'Highest',
      viewAll: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchInput !== '') {
      return this.setState({coinsToDisplay: this.searchedCoinsToDisplay() })
    }
    this.setState({coinsToDisplay: nextProps.coins.slice(0, 100)})
  }

  handleView = () => {
    if (!this.state.viewAll) {
      this.setState({viewAll: true, coinsToDisplay: this.props.coins})
    } else {
      this.setState({viewAll: false, coinsToDisplay: this.props.coins.slice(0, 100)})
    }
  }

  handleSortClick = () => {
    if (this.state.sortOrder === 'Highest') {
      this.setState({sortOrder: 'Lowest', coinsToDisplay: this.props.coins.sort((a, b) => {
        return b.cap24hrChange - a.cap24hrChange
      }).slice(0, 100)
      })
    } else {
      this.setState({sortOrder: 'Highest', coinsToDisplay: this.props.coins.sort((a, b) => {
        return a.cap24hrChange - b.cap24hrChange
      }).slice(0, 100)
      })
    }
  }

  setToMarketCap = () => {
    console.log('set to market cap')
    this.setState({coinsToDisplay: this.props.coins.sort((a, b) => {
      return b.mktcap - a.mktcap
      })
    })
  }

  searchedCoinsToDisplay = () => {
    return this.props.coins.filter( coin => coin.long.toLowerCase().includes(this.props.searchInput.toLowerCase()))
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
            <h3 className='home-page-subtitle'>Top 100 Currencies by market cap</h3>
            <div className='filter-btn-wrapper'>
              <button className='filter-btn' onClick={this.handleView} > {this.state.viewAll ? 'Top 100' : 'View All'} </button>
              <button className='filter-btn' onClick={this.handleSortClick} >{`Sort: ${this.state.sortOrder}`}</button>
              <button className='filter-btn' onClick={this.setToMarketCap} >Market Cap</button>
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
  coins: PropTypes.array
}

export default connect(mapStateToProps, null)(Home)