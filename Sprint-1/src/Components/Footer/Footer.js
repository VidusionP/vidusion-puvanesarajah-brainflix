import React,{Component} from 'react';
import Video0 from '../../../assets/Images/video-list-0.jpg';
import './Footer.scss';
import Video1 from '../../../assets/Images/video-list-1.jpg';
import Video2 from '../../../assets/Images/video-list-2.jpg';
import Video3 from '../../../assets/Images/video-list-3.jpg';
import Video4 from '../../../assets/Images/video-list-4.jpg';
import Video5 from '../../../assets/Images/video-list-5.jpg';
import Video6 from '../../../assets/Images/video-list-6.jpg';
import Video7 from '../../../assets/Images/video-list-7.jpg';
import Video8 from '../../../assets/Images/video-list-8.jpg';

const Student = props => {
    const { title, channel, image } = props.information;
    return (
    <div className='footer__list'>
        <img className='footer__list--image' src={image}/>
        <div className='footer__list--content'>
            <p className='footer__list--content-title'>{title}</p>
            <p className='footer__list--content-channel'>{channel}</p>
        </div>
    </div>
    )
}



class upNext extends Component{
    state ={
        nextVideos:[
            {
                id:0, 
                title: "BMX Rampage: 2018 Highlights...",
                channel: "Red Cow",
                image: [Video0],
                },
                {
                id:1, 
                title: "Become A Travel Pro In One Easy Lesson...",
                channel: "Scotty Cranmer",
                image: [Video1],
                },
                {
                id:2, 
                title: "Les Houches The Hidden Gem Of The...",
                channel: "Scotty Cranmer",
                image:[Video2],
                },
                {
                id:3, 
                title: "Travel Health Useful Medical Information...",
                channel: "Scotty Cranmer",
                image: [Video3],
                },
                {
                id:4, 
                title: "Cheap Airline Tickets Great Ways To Save",
                channel: "Emily Harper",
                image: [Video4],
                },
                {
                id:5, 
                title: "Take A Romantic Break In A Boutique Hotel",
                channel: "Ethan Ownen",
                image: [Video5],
                },
                {
                id:6, 
                title: "Choose The Perfect Accommodations",
                channel: "Lydia Perez",
                image: [Video6],
                },
                {
                id:7, 
                title: "Cruising Destination",
                channel: "Timothy Austin",
                image: [Video7],
                },
                {
                id:8, 
                title: "Train Travel On Track For Safety",
                channel: "Scotty Cranmer",
                image: [Video8],
                }
        ]
    }

    render() {
        return(
            <footer className='footer'>
                <p className='footer__title'>NEXT VIDEO</p>
            {this.state.nextVideos
            .filter(testing => testing.id>0)
            .map(testing => {
                return(
                
                    
                        <Student information={testing}/>
                    
                
                )
            })}
            </footer>
        )
    }

}

export default upNext;