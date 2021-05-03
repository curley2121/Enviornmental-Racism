import React from 'react';

function Video(props) {
    let {content} = props;

    return (
        <div>
            <h2>{content.title}</h2>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={content.title} className="embed-responsive-item" src={content.embed} allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Video;