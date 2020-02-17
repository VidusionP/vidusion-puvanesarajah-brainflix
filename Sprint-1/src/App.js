import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Main from './Components/Main/Main'
import Comment from './Components/Comments/Comments'
import Footer from './Components/Footer/Footer'

import './App.css';
// import './Components/Header/Header.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
