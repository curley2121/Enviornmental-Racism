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
                  <img src = "./assets/search_icon.svg" alt = 'Search'  className={css.icon}/>
                </Link>
            
                <Link to="/home">
                  <img src = "./assets/EnviroLogo.svg" alt = 'Home'  className={css.icon}/>
                </Link>
                
                <img src = "./assets/return.svg" alt = 'Return' onClick={handleReturn} className={css.icon}/>         
        </div>
    );
}

export default Header;
