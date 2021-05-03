import React, { useState, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext.js';
import { useParams } from 'react-router-dom';
import Article from './content_types/Article.js';
import Book from './content_types/Book.js';
import Organization from './content_types/Organization.js';
import Video from './content_types/Video.js';
import publicUrl from '../utils/publicUrl';
import css from './FullPage.module.css';

// Full page of content. Content ID guaranteed to be in param
function FullPage(props) {
    let { contentId } = useParams();
    let { currentUserId, content, comments, likes, addComment, addLike, removeLike} = useContext(StoreContext);
    let thisContent = content.find(resource => resource.id === contentId);
    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false); // hidden initially
    let contentComp;

    let contentComments = comments.filter(comment=>comment.contentId===thisContent.id);
    let commentCount = contentComments.length;
    
    let contentLikes = likes.filter(like=>like.contentId===thisContent.id);
    let likeSelf = contentLikes.some(like=> like.userId===currentUserId);
    let likeCount = contentLikes.length;


    function handleUnlike() {
        removeLike(contentId);
    }
    
    function handleLike() {
        addLike(contentId);
    }
      
    function handleSubmitComment(event){
        addComment(contentId, comment);
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
    }

    function renderComments() {
        return contentComments.map(d=>
              <div class={css.comment}>
                <p class={css.user}>{d.userId}</p>
                <p class={css.desc}>{d.text}</p>
              </div>
          );
    }

    switch(thisContent.type) {
        case "article":
            contentComp = <Article content={thisContent}/>;
            break;
        case "book":
            contentComp = <Book content={thisContent}/>;
            break;
        case "video":
            contentComp = <Video content={thisContent}/>;
            break;
        case "organization":
            contentComp = <Organization content={thisContent}/>;
            break;
        default:
            return <div>Something has gone catostrophically wrong</div>
    }
    return (
        <div className={css.pagecontainer}>
            <div className="container">
            <div className={css.contentwrap}>
                <div className={css.contentContainer}>
                    {contentComp}
                </div>
                <hr></hr>
                <div class={css.comments}>
                    {renderComments()}
                </div>
                {toggleComment &&
                    <form className={css.addComment} onSubmit={handleSubmitComment}>
                    <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>setComment(e.target.value)}/>
                    <button type="submit">Post</button>
                    </form>
                }
            </div>
            </div>
            <footer className={css.footer}>
                <div className="mt-auto py-3 bg-light d-flex justify-content-around">
                    <div>
                        {likeCount}
                        <button>
                            {likeSelf ?
                                <img className="img-fluid" src={publicUrl('/assets/unlike.svg')} alt="Unlike" onClick={handleUnlike}/>:
                                <img className="img-fluid" src={publicUrl('/assets/like.svg')} alt="Like" onClick={handleLike}/>
                            }
                        </button>
                    </div>
                    <div>
                        {commentCount}
                        <button onClick={e=>setToggleComment(!toggleComment)}>
                            <img className="img-fluid" src={publicUrl('/assets/comment.svg')} alt="Comment"/>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FullPage;