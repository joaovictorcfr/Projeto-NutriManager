import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

export function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const register = (e) => {
    navigate("/register");
  };
  const login = (e) => {
    navigate("/");
  };

  return (
    <form onSubmit={login}>
      <div className="login-right">
        <h1>Acessar Sistema</h1>

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
            placeholder="Digite sua senha"
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

        <button type="submit">Entrar</button>

        <h4>Não tenho conta!</h4>

        <button onClick={register}>Cadastrar</button>
      </div>
    </form>
  );
}
