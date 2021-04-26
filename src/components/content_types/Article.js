import React from 'react';

function Article(props) {
    let {content} = props;
    console.log(content);
    return (
        <div>I work</div>
    )
}

export default Article;