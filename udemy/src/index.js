// import React libraries 
import React from 'react';
import ReactDOM from 'react-dom';

//Create React component
const App = () => {
    const button = {text: 'hello'}
    const style = {backgroundColor: 'blue', color:'white'};
    return (
        <div>
            <label className = 'label' htmlFor='name'>Enter name:</label>
            <input id= 'name' type='text'/>
            <button style={style}>{button.text}</button>
        </div>

    )
};
//Display React components
ReactDOM.render(<App/>,document.querySelector('#root'));