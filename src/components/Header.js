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
               
                <Link to="/Content/all">
                  <img src = "./assets/search_icon.svg" alt = 'return'  className={css.icon}/>
                </Link>
            
                <Link to="/home">
                  <button className={css.navbutton}>
                    Home
                  </button>
                </Link>
                
                <img src = "./assets/return.svg" alt = 'return' onClick={handleReturn} className={css.icon}/>         
        </div>
    );
}

export default Header;
