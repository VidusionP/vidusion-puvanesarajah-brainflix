import React from 'react';
import '../../../Styles/Home Page/Comments.scss';

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

const Comments = (props) =>{
    return(
        <div className="main__comments">
        {props.comments.map((item,i) => {
            return(
                <div key={i}className="main__comments--section">
                    <span className="main__comments--section--circle"></span>
                    <div className="main__comments--section--box">
                        <div className="main__comments--section--box--flex">
                            <span className="main__comments--section--box--flex__name">{item.name}</span>
                            <span className="main__comments--section--box--flex__date">{formatTime(item.timestamp)}</span>
                        </div>
                        <div>{item.comment}</div>
                    </div>
                </div>)})}
    </div>
    )
}

export default Comments;