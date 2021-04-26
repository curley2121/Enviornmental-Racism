import React from 'react';
import publicUrl from '../utils/publicUrl';
import css from './Footer.module.css'

function Footer(props) {
    let {contentId} = props;
    return (
        <footer class={css.footer}>
            <div class="mt-auto py-3 bg-light d-flex justify-content-around">
                <button>
                    <img class="img-fluid" src={publicUrl('/assets/like.svg')} alt="Like"/>
                </button>
                <button>
                    <img class="img-fluid" src={publicUrl('/assets/comment.svg')} alt="Comment"/>
                </button>
            </div>
        </footer>
    );
}

export default Footer;