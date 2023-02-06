import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ConfigConta.css"

const ConfigConta = () => {
  
  
 
 const [admins, setAdmins] = useState([]);
 const [items, setItems] = useState([]);
 

 useEffect(() => {
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
   setItems(items);
  
  }
   deletarConta();
  
 }, []);

 const deletarConta = async () => {
   const users = await axios.delete(`https://strait-back-integrador.herokuapp.com/adms/${items.id}`);
  
  
   setAdmins(users.data);
 };


  return (
    <div className="body-configconta">
      <div className="container-configconta">
        <div className="edit-user" >
          <h5 className="info-adm">Perfil</h5>

          <p id="alterar-perfil">
            <Link to="/edit">Editar</Link>
          </p>
          
            <>
              <label id="nom">Nome Empresarial:</label><span className="nom-cont">{items.nomeEmpres}</span>
              <label id="email">E-mail:</label><span className="email-cont">{items.email}</span>
              <label id="tel">Telefone:</label><span className="tel-cont">{items.telefone}</span>
              <label id="end">Endereço:</label><span className="end-cont">{items.ruaAv}</span>
              <label id="num">Nº:</label><span className="num-cont">{items.numEnd}</span>
              <label id="comp">Complemento:</label><span className="comp-cont">{items.complemento}</span>
              <label id="bair">Bairro:</label><span className="bair-cont">{items.bairro}</span>
              <label id="cid">Cidade:</label><span className="cid-cont">{items.cidade}</span>
            </>
      
        </div>

        <div className="edit-senha">
          <h6>Senha</h6>
          <p id="edit">
            <Link to="/editsenhaadm">Editar</Link>
          </p>

          <label id="senha-alter">Senha:</label>
          <h2>......</h2>

          <span>Deletar Conta</span>
          <div className="button-delet-adm">
            <button onClick={deletarConta}>Deletar conta Adm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigConta;
