import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>Home works!</p>
            <button>
                <Link to="/Content">
                    All content
                </Link>
            </button>
            <button>
                <Link to="/Content/mostPopular">
                    Most Popular
                </Link>
            </button>
            <button>
                <Link to="/Content/articles">
                    Articles
                </Link>
            </button>
            <button>
                <Link to="/Content/books">
                    Books
                </Link>
            </button>
            <button>
                <Link to="/Content/videos">
                    Videos
                </Link>
            </button>
            <button>
                <Link to="/Content/organizations">
                    Organizations
                </Link>
            </button>
        </div>
    )
}

export default Home;