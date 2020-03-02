import React from 'react';
import {Link} from 'react-router-dom';
import '../../../Styles/Home Page/Footer.scss';


const Footer = (props) =>{
    
    
        return(
            <footer className='footer__sideVideo'>
                <p className='footer__sideVideo--title'>NEXT VIDEO</p>
            {props.subVideo
            .map((item,i) => {
                return(
                    <div key={i}className='footer__sideVideo--list'>
                        <Link to={`/videos/${item.id}`}>
                            <img key={item.id} className='footer__sideVideo--list--image' src={item.image} alt=""/>
                        </Link>
                        <div className='footer__sideVideo--list--content'>
                            <p className='footer__sideVideo--list--content-title'>{item.title}</p>
                            <p className='footer__sideVideo--list--content-channel'>{item.channel}</p>
                        </div>
                    </div>
                )
            })}
            </footer>
        )
    }

export default Footer;