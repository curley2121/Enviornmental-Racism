import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>Home works!</p>
            <button>
                <Link to="/Content/all">
                    All content
                </Link>
            </button>
            <button>
                <Link to="/Content/mostPopular">
                    Most Popular
                </Link>
            </button>
            <button>
                <Link to="/Content/article">
                    Articles
                </Link>
            </button>
            <button>
                <Link to="/Content/book">
                    Books
                </Link>
            </button>
            <button>
                <Link to="/Content/video">
                    Videos
                </Link>
            </button>
            <button>
                <Link to="/Content/organization">
                    Organizations
                </Link>
            </button>
        </div>
    )
}

export default Home;