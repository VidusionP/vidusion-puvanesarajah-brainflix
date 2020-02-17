import React from 'react';

import logo from '../../../assets/Logo/Logo-brainflix.svg';
import mohan from '../../../assets/Images/Mohan-muruge.jpg';
import test from '../../../assets/Icons/SVG/Icon-upload.svg'
// import './Header.scss';


function Header() {
    return(
        <header className='header'>
          <img src={logo} className='header__image' />
          <label className="header__text">
            <input className="header__text--1" type='text' placeholder="Search"></input>
          </label>
          <div className="header__display">
            <button className="header__display--button"><img className="header__display--button-image" src={test}/>UPLOAD</button>
            <img className="header__display--image"src={mohan} />
          </div>
        </header>
    )
}

export default Header;

