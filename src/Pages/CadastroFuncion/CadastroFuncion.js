import React, { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CadastroFuncion.css";

const CadastroFuncion = ({ id = "funcion", onClose = () => {}, children }) => {
  const [nomeFun, setNomeFun] = useState("");
  const [telefoneFun, setTelefoneFun] = useState("");
  const [cpfFun, setCpfFun] = useState("");
  const [ruaAv, setRuaAv] = useState("");
  const [numEnd, setNumEnd] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const navigate = useNavigate();

  async function cadastrarFuncionario(event) {
    event.preventDefault();
    const funcionario = {
      nomeFun: nomeFun,
      telefoneFun: telefoneFun,
      cpfFun: cpfFun,
      ruaAv: ruaAv,
      numEnd: numEnd,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
    };
    const getFun = await axios.post(
      "https://strait-back-integrador.herokuapp.com/funcionarios",
      funcionario
    );
    console.log(getFun);
    if (getFun.status === 200) {
      navigate("/listarusuarios");
      toast.success("Funcionário cadastrado com Sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <form id={id} className="cadastro-funcion ">
      <div className="fucion-content">
        <div className="funcion-body">
          <p>Cadastrar Funcionário</p>
          <div className="nome-fun">
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Nome completo"
              value={nomeFun}
              onChange={(event) => setNomeFun(event.target.value)}
              required
            />
          </div>
           <div className="celular-fun">
            <input
              type="tel"
              name="telefone"
              placeholder="Celular"
              value={telefoneFun}
              onChange={(event) => setTelefoneFun(event.target.value)}
              required
            />
          </div>
          <div className="cpf-fun">
            <input
              type="text"
              name="cpfFun"
              placeholder=" CPF"
              value={cpfFun}
              onChange={(event) => setCpfFun(event.target.value)}
              required
            />
          </div>

          <div className="av-rua-fun">
            <input
              type="text"
              name="av-rua"
              placeholder="Av./Rua"
              value={ruaAv}
              onChange={(event) => setRuaAv(event.target.value)}
              required
            />
          </div>

          <div className="nun-end-fun">
            <input
              type="text"
              name="numero"
              placeholder="Nº"
              value={numEnd}
              onChange={(event) => setNumEnd(event.target.value)}
              required
            />
          </div>
          <div className="complemento-fun">
            <input
              type="text"
              name="complemento"
              placeholder=" Complemento"
              value={complemento}
              onChange={(event) => setComplemento(event.target.value)}
              required
            />
          </div>
          <div className="bairro-fun">
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
              required
            />
          </div>
          <div className="cidade-fun">
            <input
              type="text"
              name="cidade"
              placeholder=" Cidade"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
              required
            />
          </div> 
   
          <button
            className="button-funcionlog"
            onClick={(e) => cadastrarFuncionario(e)}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CadastroFuncion;
