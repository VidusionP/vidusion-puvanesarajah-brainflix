import React, {Component} from 'react';
import Views from '../../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../../assets/Icons/SVG/Icon-likes.svg';
import mohan from '../../../assets/Images/Mohan-muruge.jpg';
import Image from '../../../assets/Images/video-list-0.jpg';
import Video from '../../../assets/Video/BrainStation Sample Video.mp4'
import play from '../../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../../assets/Icons/SVG/Icon-volume.svg';

class Vegeta extends Component {
    state ={
        
        id: 0,
        title: 'BMX Rampage: 2018 Highlights',
        description: 'On a gusty day in Southern Utag, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        image: [Image],
        views: '1,001,023',
        likes: '110,985',
        duration: '0:00/:42',
        video: [Video],
        timestamp: '12/18/2018',
        comments: [{
            name:"Michael Lyons",
            date:"12/18/2018",
            comment:"They blew the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
            name:"Gary Wong",
            date:"12/18/2018",
            comment:"Everytime I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
            name:"Theodore Duncan",
            date:"11/15/2018",
            comment:"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instanlty happy! He's definitely my favorite ever!"
        }]
            }
        
    
    render () {
        return(
        <main className ='main'>
            <div className="Comments">
                <h2 className="Comments__title">{this.state.title}</h2>
                <h3 className="Comments__title2">By {this.state.channel} <span className="Comments__date">{this.state.timestamp}</span></h3>
                <div className="Comments__counter">
                    <img className="Comments__counter--views" src={Views} /> {this.state.views}
                    <img className="Comments__counter--likes"src={Likes} /> {this.state.likes}
                </div>
                <p className="Comments__description">
                    {this.state.description}
                </p>
                <h3 className="Comments__title3">3 Comments</h3>
                <p className="Comments__para">Join the Conversation</p>
                <div className="Comments__box">
                    <div className="Comments__box--icon">
                        <img className="Comments__box--icon--image"src={mohan} />
                    </div>
                    <div className="Comments__box--comment">
                        <textarea className="Comments__box--comment--text"type='text'/>
                        <button className="Comments__box--comment--button">Comment</button>
                    </div>
                </div>
                <div className="Comments__comments">
                    {this.state.comments.map(testing => {
                        return(
                            <div className="Comments__comments--test">
                                <span className="Comments__comments--test-circle"></span>
                                <div className="Comments__comments--test1">
                                    <div className="Comments__comments--test-flex">
                                        <span className="Comments__comments--test-flex--name">{testing.name}</span>
                                        <span className="Comments__comments--test-flex--date">{testing.date}</span>
                                    </div>
                                    <div>{testing.comment}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
        )
    }
}




export default Vegeta;