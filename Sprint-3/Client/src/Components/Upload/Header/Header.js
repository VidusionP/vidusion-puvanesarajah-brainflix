import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../Assets/Logo/Logo-brainflix.svg';
import thumbnail from '../../../Assets/Images/Mohan-muruge.jpg';
import uploadIcon from '../../../Assets/Icons/SVG/Icon-upload.svg';
import '../../../Styles/Upload/Header.scss';

function Header() {
    return(
        <header className='Header__header'>
          <Link to="/"><img src={logo} className='Header__image' alt=""/></Link>
          <label className="Header__text">
            <input className="Header__text--1" type='text' placeholder="Search"></input>
          </label>
          <div className="Header__display">
            <Link to='/Upload' className='Header__display--form'>
              <button className="Header__display--button">
                <img className="Header__display--button-image" src={uploadIcon} alt=""/>UPLOAD
              </button>
            </Link>
            <img className="Header__display--image"src={thumbnail} alt=""/>
          </div>
        </header>
    )
}

export default Header;
