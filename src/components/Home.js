import React from 'react';
import { Link } from "react-router-dom";
import css from './Home.module.css';

function Home() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to ENDviroRacism </h1>
            <img src = "./assets/EnviroLogo.svg" alt = 'Home'  className={css.logo_main}/>
                <Link to="/about">
                  <button className={css.contbutton}>
                    About Us
                  </button>
                </Link>
                <Link to="/Content/mostPopular">
                  <button className={css.contbutton}>
                    Most Popular
                  </button>
                </Link>
            
            
                <Link to="/Content/article">
                  <button className={css.contbutton}>
                    Articles
                  </button>
                </Link>
            
            
                <Link to="/Content/book">
                  <button className={css.contbutton}>
                    Books
                  </button>
                </Link>
            
            
                <Link to="/Content/video">
                  <button className={css.contbutton}>
                    Videos
                  </button>
                </Link>
            
            
                <Link to="/Content/organization">
                  <button className={css.contbutton}>
                    Organizations
                  </button>
                </Link>
                <Link to="/Content/all">
                  <button className={css.contbutton}>
                    All content
                  </button>
                </Link>
            
        </div>
    )
}

export default Home;

