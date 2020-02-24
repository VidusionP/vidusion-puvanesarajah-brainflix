import React from 'react';
import Preview from '../../../assets/Images/Upload-video-preview.jpg';

export default function Main(){
    return(
        <main className="main1">
            <div>
                <p className='main1__thumbnail'>VIDEO THUMBNAIL</p>
                <img className='main1__image' src={Preview} alt='Test' />
            </div>
            <div className='main1__div'>
                <p className="main1__title">TITLE OF YOUR VIDEO</p>
                <input className="main1__videoText"type='text' placeholder='Add a title to your video'/>
                <p className="main1__title2">ADD A VIDEO DESCRIPTION</p>
                <textarea className="main1__videoDesc" type='text' placeholder='Add a description of your video'/>
            </div>
        </main>
    )
}