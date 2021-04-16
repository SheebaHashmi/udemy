import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResult] = useState([]);

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebouncedTerm(term);
        },1000)
        return() =>{
            clearTimeout(timeoutId);
        }
        
    },[term]);

    useEffect(()=>{
        const searchRequest = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch: debouncedTerm,
                }
            })
            setResult(data.query.search)
        }
        if(debouncedTerm){
            searchRequest();
        }
        
    },[debouncedTerm]);

    const renderedList = results.map((result)=> {
        return(
            <div key = {result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML= {{__html: result.snippet}}></span>
                 
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className = "ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input 
                        value = {term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="ui celled list">
                {renderedList}
                </div>
            </div>
        </div>
    )
}
export default Search;