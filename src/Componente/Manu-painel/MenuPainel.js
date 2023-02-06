import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./MenuPainel.css";
import logo from "./logosvejasssdeussss.png";

const MenuPainel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
     setItems(items);
    
    }
   }, []);
  return (
    <div className="menu2-adm ">
      <div className="container">
        <img className="logo" src={logo} alt="locomarca" />
        <p className="logo-nome">Dashboard</p>
        <button className="btn">
          <p>{items.nomeEmpres}</p>
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
          <ul className="dropdown">
            <li className="active">
              <a> geral</a>
            </li>
            <li id="config-g">
              <a>
                <i className="fa fa-cog" aria-hidden="true"></i>Configurações
              </a>
            </li>
            <li>
              <Link to="/"><i className="fa fa-sign-out" aria-hidden="true"></i>Sair</Link>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default MenuPainel;
