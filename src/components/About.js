import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <p>About us works!</p>
            <button>
                <Link to="/home">
                    Home
                </Link>
            </button>
        </div>
    )
}

export default About;