import React from 'react';

function Video(props) {
    let {content} = props;

    return (
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src={content.url} allowfullscreen></iframe>
        </div>
    );
}

export default Video;