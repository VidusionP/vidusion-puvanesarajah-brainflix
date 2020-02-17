import React from 'react';


const goku = [
    {
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
    }
]



function Comments() {
    const listComments = goku.map((Comments) => 
    <div className='mainTest'>
        
            <span className='circle'></span>
            <div>
                {Comments.name} {Comments.date}
                <div>{Comments.comment}</div>
            </div>
            
    </div>
    )

    return(
        <div>
            {listComments}
        </div>
    )
}
export default Comments;