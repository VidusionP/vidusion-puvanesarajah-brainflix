import React from 'react';
import Views from '../../../Assets/Icons/SVG/Icon-views.svg';
import Likes from '../../../Assets/Icons/SVG/Icon-likes.svg';
import mohan from '../../../Assets/Images/Mohan-muruge.jpg';
import '../../../Styles/Home Page/Main.scss';

  
function formatTime(timeCreated) {

    var diff = Math.floor((Date.now() - timeCreated) / 1000);
    var interval = Math.floor(diff / 31536000);
  
    if (interval >= 1) {
      return interval + "y ago";
    }
    interval = Math.floor(diff / 2592000);
    if (interval >= 1) {
      return interval + "m ago";
    }
    interval = Math.floor(diff / 604800);
    if (interval >= 1) {
      return interval + "w ago";
    }
    interval = Math.floor(diff / 86400);
    if (interval >= 1) {
      return interval + "d ago";
    }
    interval = Math.floor(diff / 3600);
    if (interval >= 1) {
      return interval + "h ago";
    }
    interval = Math.floor(diff / 60);
    if (interval >= 1) {
      return interval + " m ago";
    }
    return "<1m";
  }

const Main = (props) => {
        return(   
        <main className='main__description'>
                <h2 className="main__description--title">{props.title}</h2>
                <h3 className="main__description--title2">By {props.channel} <span className="main__description--date">{formatTime(props.timestamp)}</span></h3>
                <div className="main__description--counter">
                    <img className="main__description--counter--views" src={Views} alt=""/> {props.views}
                    <img className="main__description--counter--likes"src={Likes} alt=""/> {props.likes}
                </div>
                <p className="main__description--description">
                    {props.description}
                </p>
                <h3 className="main__description--title3">3 Comments</h3>
                <p className="main__description--para">Join the Conversation</p>
                <div className="main__description--box">
                    <div className="main__description--box--icon">
                        <img className="main__description--box--icon--image"src={mohan} alt=""/>
                    </div>
                    <div className="main__description--box--comment">
                        <textarea className="main__description--box--comment--text"type='text'/>
                        <button className="main__description--box--comment--button">Comment</button>
                    </div>
                </div>
        </main>
        )
}

export default Main;