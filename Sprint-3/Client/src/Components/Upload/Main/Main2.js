import React from 'react';
import Preview from '../../../Assets/Images/Upload-video-preview.jpg';
import '../../../Styles/Upload/Main2.scss';


export default function mainUpload(){
    return(
        <main className="main__main">
            <div>
                <p className='main__main--thumbnail'>VIDEO THUMBNAIL</p>
                <img className='main__main--image' src={Preview} alt='Test' />
            </div>
            <div className='main__main--div'>
                <p className="main__main--title">TITLE OF YOUR VIDEO</p>
                <input className="main__main--videoText"type='text' id="title" name="title" placeholder='Add a title to your video'/>
                <p className="main__main--title2">ADD A VIDEO DESCRIPTION</p>
                <textarea className="main__main--videoDesc" type='text' id="description" name="description" placeholder='Add a description of your video'/>
            </div>
        </main>
    )
}