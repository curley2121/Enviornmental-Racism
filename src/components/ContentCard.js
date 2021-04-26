import React from 'react';
import css from "./ContentCard.module.css";
import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext.js';
// Content cards are like posts on the instagram project except we need to conditionally
// render parts of the card depending on the type of content.
function ContentCard(props) {
    let content = props.content;




    if (content.type === "article"){
        return (
        <div className={css.content}>

            <b className={css.title}>{content.title}</b>
            <p className={css.author}>By {content.author}</p>
            <p className={css.desc}>{content.desc}</p>
        </div>

        );

    }else if (content.type === "book"){
        return (
        <div className={css.content}>

            <b className={css.title}>{content.title}</b>
            <p className={css.author}>By {content.author}</p>
            <p className={css.desc}>{content.desc}</p>
        </div>

        );

    }else if (content.type === "video"){
        return (
        <div className={css.content}>

            <b className={css.title}>{content.title}</b>
            <p className={css.author}>By {content.author}</p>
            <img src={content.thumbnail} alt="alternatetext"></img>
        </div>
        

        );

    }else if (content.type === "organization"){
        return (
        <div className={css.content}>

            <b className={css.title}>{content.title}</b>
            <p className={css.desc}>{content.desc}</p>
        </div>

        );

    }



    
}

export default ContentCard;