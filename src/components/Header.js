import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import css from "./Header.module.css";

function Header() {
  
  const history = useHistory();
  
  function handleReturn(){
    history.goBack();
  }
  
  function handleSearch(){
    history.goBack();
  }


    return (
        <div className={css.navbar} >
               
                <Link to="/home">
                  <img src = "https://cdn.glitch.com/21330e98-ab0c-4abb-a9d3-3a74bd7d9c62%2Fsearch_icon.svg?v=1619456498681" alt = 'return' onClick={handleSearch} className={css.icon}/>
                </Link>
            
                <Link to="/home">
                  <button className={css.navbutton}>
                    Home
                  </button>
                </Link>
                
                <img src = "https://cdn.glitch.com/21330e98-ab0c-4abb-a9d3-3a74bd7d9c62%2Freturn.svg?v=1619456932041" alt = 'return' onClick={handleReturn} className={css.icon}/>         
        </div>
    );
}

export default Header;