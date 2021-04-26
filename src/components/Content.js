import React, {useState} from 'react';
import css from "./Content.module.css";
import { useParams, Link } from 'react-router-dom';
import ContentCard from './ContentCard';
import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext.js';
import { Dropdown } from 'react-bootstrap';

// Render all content that matches the filter by calling ContentCard for each piece of content.
// Clicking on a content card redirects to FullPage for that content.
function Content() {
    let {filter} = useParams();
    const [value,setValue]=useState('Most Liked');
    
    let {
        content, likes
      } = useContext(StoreContext);

    console.log(content.length)

    let filtered = content;
    let fName = "default";

    if (filter === "article"){
        fName = "Top Articles";
    }else if (filter === "video"){
        fName = "Top Videos";
    }else if (filter === "organization"){
        fName = "Top Organizations";
    }else if (filter === "book"){
        fName = "Top Books";
    }else if (filter === "all"){
        fName = "All Posts";
    }else if (filter === "mostPopular"){
        fName = "Most Popular";
    }


    if (filter === "mostPopular" || filter === "all"){
        
    }else{

        filtered = content.filter(cont=>cont.type===filter)

    }
    

    let sorted = filtered;

    resort();
    

    const handleSelect=(e)=>{
        console.log(e);
        setValue(e);
        resort();
      }

    return (
        <div className={css.container}>
            <h1 className={css.title}> {fName}</h1>
            <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle  className={css.drop} variant="success" id="dropdown-basic" >
                {value}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item className={css.item} eventKey="Most Liked">Most Liked</Dropdown.Item>
                <Dropdown.Item className={css.item} eventKey="Least Liked">Least Liked</Dropdown.Item>
                <Dropdown.Item className={css.item} eventKey="Most Recent">Most Recent</Dropdown.Item>
                <Dropdown.Item className={css.item} eventKey="Least Recent">Least Recent</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            

            {sorted
        .map(c=>
            <Link className={css.card} key={c.id} to={"/FullPage/".concat(c.id)}>
            <ContentCard content={c}/>
        </Link>
        )
        }

        </div>
    );

    function resort(){
        if (value === "Most Recent"){
            sorted = filtered.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime));
        }else if  (value === "Least Recent"){
            sorted = filtered.sort((a,b)=>new Date(b.datetime) - new Date(a.datetime)).reverse();
        }else if  (value === "Most Liked"){
            sorted = filtered.sort((a,b)=>b.likes - a.likes);
        }else if  (value === "Least Liked"){
            sorted = filtered.sort((a,b)=>b.likes - a.likes).reverse();
        }
    }

    

    

    
}




export default Content;