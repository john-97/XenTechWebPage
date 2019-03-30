import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

// import Statements
import Header from './components/Header/Header'
import ServicesAndRecents from './components/Services&Recents/Services&Recents'
import TwitterFeed from './components/TwitterFeed/Twitter'
import Footer from './components/Footer/Footer'

class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ServicesAndRecents />
        <TwitterFeed />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return{
    store: state
  }
}

export default connect(mapStateToProps)(App);
