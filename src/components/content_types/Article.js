import React from 'react';

function Article(props) {
    let {content} = props;
    let date = new Date(content.datetime)

    return (
        <div>
            <h2>{ content.title }</h2>
            <h5>{ content.author }</h5>
            <h5>{ date.toDateString() }</h5>
            <p>{ content.body }</p>
            <a href={content.url} rel="noreferrer" target="_blank">Read the full article here</a>
        </div>
    );
}

export default Article;