import React,{useState} from 'react';

const Accordion = ({items}) => {
    const [activeTitle, setActiveTitle] = useState(null);
    
    const onTitleClick = (index) => {
        setActiveTitle(index);
    }

    const renderedList = items.map((item, index)=>{
        const active = index === activeTitle? 'active':'';

        return(
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick = {()=>{onTitleClick(index)}}>
                    <i className="angle down icon"></i>
                    {item.title}
                </div>
                <div className = {`content ${active}`}>
                    <p>{item.content}</p>
                </div>

            </React.Fragment>
        );
    })
    
    return (
        <div className="ui styled accordion">
            {renderedList}
        </div>
    )
}
export default Accordion;