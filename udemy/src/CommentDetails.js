import React from 'react';


const CommentDetails = (props) => {
    return (
        <div className = "comment">
              <a href = "/" className = "avatar">
                  <img alt = "avatar" src={props.avatar} />
              </a>
              <a href ="/" className="author">
                {props.author}
              </a>
              <div className = "metadata">
                  <span className = "date">{props.timeAgo}</span>
              </div>
              <div className ="text">
                {props.comment}
              </div>
          </div>
    )
}
export default CommentDetails;