import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext.js';
import css from "./About.module.css";


function About() {
  
  let {
	about
  } = useContext(StoreContext);
  
    return (
        <div className={css.container}> 
            <h1 className={css.title}>ABOUT US</h1>
            <p className={css.title}>{about.body}</p>
            <p className={css.title}>Enjoy!</p>
        </div>
    )
}

export default About;
