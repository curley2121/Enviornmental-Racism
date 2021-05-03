import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../contexts/StoreContext.js';
import Article from './content_types/Article.js';
import Book from './content_types/Book.js';
import Organization from './content_types/Organization.js';
import Video from './content_types/Video.js';
import Footer from './Footer.js'
import css from "./FullPage.module.css";

// Full page of content. Content ID guaranteed to be in param
function FullPage() {
    let { contentId } = useParams();
    let { content } = useContext(StoreContext);
    let thisContent = content.find(resource => resource.id === contentId);
    let contentComp;

    switch(thisContent.type) {
        case "article":
            contentComp = <Article content={thisContent}/>;
            break;
        case "book":
            contentComp = <Book content={thisContent}/>;
            break;
        case "video":
            contentComp = <Video content={thisContent}/>;
            break;
        case "organization":
            contentComp = <Organization content={thisContent}/>;
            break;
        default:
            return <div>Something has gone catostrophically wrong</div>
    }
    return (
        <div className={css.container}>
            <div className="container">
                {contentComp}
            </div>
            <Footer contentId={contentId}/>
        </div>
    )
}

export default FullPage;