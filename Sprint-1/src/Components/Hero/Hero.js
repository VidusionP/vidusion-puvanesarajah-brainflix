import React, {Component} from 'react';
import Views from '../../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../../assets/Icons/SVG/Icon-likes.svg';
import mohan from '../../../assets/Images/Mohan-muruge.jpg';
import Image from '../../../assets/Images/video-list-0.jpg';
import Video from '../../../assets/Video/BrainStation Sample Video.mp4'
import play from '../../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../../assets/Icons/SVG/Icon-volume.svg';


class Hero extends Component {
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
      <section className="mainVideo">
          <video className='mainVideo__video' poster={this.state.image}>
              <source src={this.state.video} type='video/mp4'/>
              <div className="test"></div>
          </video>
          <div  className='mainVideo__flex'>
              <img className="mainVideo__flex--play"src={play} />
              <span className="mainVideo__flex--scrub">
                  <i className="mainVideo__flex--scrub--inside"></i>
              </span>
              <span className="mainVideo__flex--block">
                  <img className="mainVideo__flex--block__fullscreen"src={fullscreen} />
                  <img className="mainVideo__flex--block__volume"src={volume} />
              </span>
          </div>
          
      </section>
      )
  }
}


export default Hero;