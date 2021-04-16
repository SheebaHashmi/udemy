import React,{useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
const items = [
    {
        title:'what is react?',
        content:'React is a front end javascript framework'
    },
    {
        title:'why is react prefered?',
        content:'React is a front end javascript framework'
    },
    {
        title:'how to use react?',
        content:'React is a front end javascript framework'
    },
    
]
const options = [
    {
        label:'A color of red',
        value:'red'
    },
    {
        label:'A color of blue',
        value:'blue'
    },
    {
        label:'A color of yellow',
        value:'yellow'
    },
]

const App = () => {
    const [selected, onSelectedChange] = useState(options[0])
    return (
        <div>
            <Header/>
           <Route path = '/'>
               <Accordion items={items}/>
           </Route>
           <Route path = '/list'>
               <Search/>
           </Route>
           <Route path = '/dropdown'>
               <Dropdown 
                label ='Select a color'
                options = {options}
                selected = {selected}
                onSelectedChange = {onSelectedChange}

               />
           </Route>
           <Route path = '/translate'>
               <Translate/>
           </Route>
        </div>
    );
}
export default App;