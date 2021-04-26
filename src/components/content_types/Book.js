import React from 'react';

function Book(props) {
    let {content} = props;

    return (
        <div>
            <h2>{ content.title }</h2>
            <h5>{ content.author }</h5>
            <h5>{ content.year }</h5>
            <p>{ content.desc }</p>
            <a href={content.url} rel="noreferrer" target="_blank">Get the book here</a>
        </div>
    );
}

export default Book;