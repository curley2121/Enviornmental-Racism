import React from 'react';

function Video(props) {
    let {content} = props;

    return (
        <div>
            <h2>{content.title}</h2>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe title={content.title} class="embed-responsive-item" src={content.embed} allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Video;