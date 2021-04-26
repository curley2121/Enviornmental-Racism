import React from 'react';

function Organization(props) {
    let {content} = props;

    return (
        <div>
            <h2>{ content.title }</h2>
            <p>{ content.desc }</p>
            <a href={content.url} rel="noreferrer" target="_blank">Learn more and support this charity here</a>
        </div>
    );
}

export default Organization;