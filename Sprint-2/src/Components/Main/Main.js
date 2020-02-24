import React from 'react';
import Views from '../../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../../assets/Icons/SVG/Icon-likes.svg';
import mohan from '../../../assets/Images/Mohan-muruge.jpg';




const Child = (props) => {

        return(

                
            <main className='main'>
            
            
                <h2 className="Comments__title">{props.title}</h2>
                <h3 className="Comments__title2">By {props.channel} <span className="Comments__date">{props.timestamp}</span></h3>
                <div className="Comments__counter">
                    <img className="Comments__counter--views" src={Views} alt=""/> {props.views}
                    <img className="Comments__counter--likes"src={Likes} alt=""/> {props.likes}
                </div>
                <p className="Comments__description">
                    {props.description}
                </p>
                <h3 className="Comments__title3">3 Comments</h3>
                <p className="Comments__para">Join the Conversation</p>
                <div className="Comments__box">
                    <div className="Comments__box--icon">
                        <img className="Comments__box--icon--image"src={mohan} alt=""/>
                    </div>
                    <div className="Comments__box--comment">
                        <textarea className="Comments__box--comment--text"type='text'/>
                        <button className="Comments__box--comment--button">Comment</button>
                    </div>
                </div>
        </main>
        )
    
}




export default Child;