import React from 'react';
import css from "./Content.module.css";
import { useParams, Link } from 'react-router-dom';
import ContentCard from './ContentCard';

// Render all content that matches the filter by calling ContentCard for each piece of content.
// Clicking on a content card redirects to FullPage for that content.
function Content() {
    let {filter} = useParams();

    return (
        <div className={css.container}>
            <p>Content works!</p>
            <p>Filter by {typeof filter == 'undefined' ? 'all' : filter} Content</p>
            <Link to="/FullPage/putIDhere">
                <ContentCard cardType="article"/>
            </Link>
        </div>
    )
}

export default Content;