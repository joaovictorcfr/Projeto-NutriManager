import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import "./index.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [nome] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const back = (e) => {
    navigate(-1);
  };

  return (
    <div className="login-right">
      <h1>Cadastrar usuário</h1>
      <div className="name-user">
        <MdPerson />
        <input type="nome" placeholder="Digite o seu nome" value={nome} />
      </div>
      <div className="login-loginInputEmail">
        <MdEmail />
        <input
          type="email"
          placeholder="Digite um email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="login-loginInputPassword">
        <MdLock />
        <input
          placeholder="Digite uma senha"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-eye">
          {show ? (
            <HiEye size={20} onClick={handleClick} />
          ) : (
            <HiEyeOff size={20} onClick={handleClick} />
          )}
        </div>
      </div>
      <div className="confirm-Password">
        <MdLock />
        <input
          placeholder="Confirme sua senha"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="confirm-eye">
          {show ? (
            <HiEye size={20} onClick={handleClick} />
          ) : (
            <HiEyeOff size={20} onClick={handleClick} />
          )}
        </div>
      </div>

      <button onClick={back}>Cadatrar</button>

      <button onClick={back}>Voltar</button>
    </div>
  );
}
