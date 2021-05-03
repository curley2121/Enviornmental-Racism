import React from 'react';
import publicUrl from '../utils/publicUrl';
import css from './Footer.module.css'

function Footer(props) {
    let {contentId} = props;
    return (
        <footer className={css.footer}>
            <div className="mt-auto py-3 bg-light d-flex justify-content-around">
                <button>
                    <img className="img-fluid" src={publicUrl('/assets/like.svg')} alt="Like"/>
                </button>
                <button>
                    <img className="img-fluid" src={publicUrl('/assets/comment.svg')} alt="Comment"/>
                </button>
            </div>
        </footer>
    );
}

export default Footer;