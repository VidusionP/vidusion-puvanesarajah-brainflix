import React from 'react';

const Comments = (props) =>{
    return(
        <div className="Comments">
                    {props.comments.map((item,i) => {
                        return(
                            <div key={i}className="Comments__comments--test">
                            <span className="Comments__comments--test-circle"></span>
                            <div className="Comments__comments--test1">
                                <div className="Comments__comments--test-flex">
                                    <span className="Comments__comments--test-flex--name">{item.name}</span>
                                    <span className="Comments__comments--test-flex--date">{item.timestamp}</span>
                                </div>
                                <div>{item.comment}</div>
                            </div>
                        </div>)})
                }
                </div>
    )
}

export default Comments;