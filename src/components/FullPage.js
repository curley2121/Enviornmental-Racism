import React from 'react';
import { useParams } from 'react-router-dom';

// Full page of content. Content ID guaranteed to be in param
function FullPage() {
    let { contentId } = useParams();

    return (
        <p>Show full page of content with id {contentId}</p>
    );
}

export default FullPage;