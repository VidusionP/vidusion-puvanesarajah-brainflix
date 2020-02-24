import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';


const Testing1 = (props) =>{
    
    
        return(
            <footer className='footer'>
                <p className='footer__title'>NEXT VIDEO</p>
            {props.Hello
            .map((testing,i) => {
                return(
                    <div key={i}className='footer__list'>
                        <Link to={`/videos/${testing.id}?api_key=fb10f9c7-b9a0-40ea-80dd-f041fcb27729'`}>
                            <img key={testing.id} className='footer__list--image' src={testing.image} alt=""/>
                        </Link>
                        <div className='footer__list--content'>
                            <p className='footer__list--content-title'>{testing.title}</p>
                            <p className='footer__list--content-channel'>{testing.channel}</p>
                        </div>
                    </div>
                )
            })}
            </footer>
        )
    }

export default Testing1;