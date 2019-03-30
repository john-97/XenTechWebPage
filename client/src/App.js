import React, { Component } from 'react';
import './App.css';

// import Statements
import Header from './components/Header/Header'
import ServicesAndRecents from './components/Services&Recents/Services&Recents'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ServicesAndRecents />
        <Footer />
      </div>
    );
  }
}

export default App;
