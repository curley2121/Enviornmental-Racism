import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../contexts/StoreContext.js';
import Article from './content_types/Article.js';
import Book from './content_types/Book.js';
import Organization from './content_types/Organization.js';
import Video from './content_types/Video.js';

// Full page of content. Content ID guaranteed to be in param
function FullPage() {
    let { contentId } = useParams();
    let { content } = useContext(StoreContext);
    let thisContent = content.find(resource => resource.id === contentId);

    switch(thisContent.type) {
        case "article":
            return <Article content={thisContent}/>;
            break;
        case "book":
            return <Book content={thisContent}/>;
            break;
        case "video":
            return <Video content={thisContent}/>;
            break;
        case "organization":
            return <Organization content={thisContent}/>;
    }
}

export default FullPage;