import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/Logo/Logo-brainflix.svg';
import mohan from '../../../assets/Images/Mohan-muruge.jpg';
import test from '../../../assets/Icons/SVG/Icon-upload.svg'



function Header() {
    return(
        <header className='header'>
          <Link to="/"><img src={logo} className='header__image' alt=""/></Link>
          <label className="header__text">
            <input className="header__text--1" type='text' placeholder="Search"></input>
          </label>
          <div className="header__display">
            <Link to='/Upload' className='header__display--form'>
              <button className="header__display--button">
                <img className="header__display--button-image" src={test} alt=""/>UPLOAD
              </button>
            </Link>
            <img className="header__display--image"src={mohan} alt=""/>
          </div>
        </header>
    )
}

export default Header;
