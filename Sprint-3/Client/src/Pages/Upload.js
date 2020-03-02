import React, { Component } from 'react';
import Header from '../Components/Upload/Header/Header'
import HeroUpload from '../Components/Upload/Hero/Hero2'
import MainUpload from '../Components/Upload/Main/Main2'
import FooterUpload from '../Components/Upload/Footer/Footer2'
import '../Upload.css';

class Upload extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroUpload />
        <MainUpload />
        <FooterUpload />
      </div>
    );
  }
}

export default Upload;
