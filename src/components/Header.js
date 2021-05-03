import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import css from "./Header.module.css";
import publicUrl from '../utils/publicUrl';

function Header() {
  
  const history = useHistory();
  
  function handleReturn(){
    history.goBack();
  }

  return (
      <div className={css.navbar} >
              
          
              <Link to="/home">
                <img src = {publicUrl("/assets/EnviroLogo.svg")} alt = 'Home'  className={css.icon}/>
              </Link>
              
              <img src = {publicUrl("/assets/return.svg")} alt = 'Return' onClick={handleReturn} className={css.icon}/>         
      </div>
  );
}

export default Header;

