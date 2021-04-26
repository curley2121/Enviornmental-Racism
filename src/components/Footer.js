import React from 'react';
import publicUrl from '../utils/publicUrl';

function Footer(props) {
    let {contentId} = props;
    return (
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container d-flex justify-content-around">
                <button>
                    <img src={publicUrl('/assets/like.svg')} alt="Like"/>
                </button>
                <button>
                    <img src={publicUrl('/assets/comment.svg')} alt="Comment"/>
                </button>
            </div>
        </footer>
    );
}

export default Footer;