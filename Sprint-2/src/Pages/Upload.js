import React, { Component } from 'react';
import Header from '../Components/Header/Header'

import Test from '../Components/Hero/Hero2'

import Main2 from '../Components/Main/Main2'

import Footer2 from '../Components/Footer/Footer2'
import '../Upload.css';



class Upload extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Test />
        <Main2 />
        <Footer2 />
      </div>
    );
  }
}

export default Upload;
