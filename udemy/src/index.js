// import React libraries 
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetails from './CommentDetails';
import ApproveCard from './ApproveCard';

//Create React component
const App = () => {
  
    return (
      <div className= "ui container comments">
          <ApproveCard>Are you sure?</ApproveCard>
          <ApproveCard>
            <CommentDetails
            author = "Sam"
            timeAgo = "Today at 3:20PM"
            comment = "Hey! its me, Sam."
            avatar = {faker.image.image()}
            />
          </ApproveCard>
          <ApproveCard>
          <CommentDetails 
            author = "Bill"
            timeAgo = "Today at 7:20PM"
            comment = "Hey! its me, Bill."
            avatar = {faker.image.image()}
            />
          </ApproveCard>
          <ApproveCard>
          <CommentDetails
            author = "Hair"
            timeAgo = "Today at 4:10PM"
            comment = "Hey! its me, Hair."
            avatar = {faker.image.image()}
        />
          </ApproveCard>
          
      </div>  

    );
};
//Display React components
ReactDOM.render(<App/>,document.querySelector('#root'));