import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../../Styles/Upload/Footer2.scss';

export default function Footer(props){
    
    return(
        <footer className='footer__footer'>
            <Link to='/'>
                <button className='footer__footer--button' 
                    onClick={() => axios.post("http://localhost:8000/videos/", 
                        {
                            title: document.querySelector('#title').value,
                            description: document.querySelector("#description").value
                        })}>PUBLISH
                </button>
            </Link>
            <a className='footer__footer--cancel' href='/'>CANCEL</a>
        </footer>
    )
}