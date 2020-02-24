import React from 'react';
import play from '../../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../../assets/Icons/SVG/Icon-volume.svg';





const Child =(props) => {

        return(
        <section className="mainVideo">
            <video className='mainVideo__video' poster={props.poster}>
                <source src={props.video} type='video/mp4'/>
                <div className="test"></div>
            </video>
            <div  className='mainVideo__flex'>
                <img className="mainVideo__flex--play"src={play} alt=""/>
                <span className="mainVideo__flex--scrub">
                    <i className="mainVideo__flex--scrub--inside"></i>
                </span>
                <span className="mainVideo__flex--block">
                    <img className="mainVideo__flex--block__fullscreen"src={fullscreen} alt=""/>
                    <img className="mainVideo__flex--block__volume"src={volume} alt=""/>
                </span>
            </div>

        </section>
        )
}


export default Child;