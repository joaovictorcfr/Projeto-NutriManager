import React from "react";
import "./index.css";
import funcionarios from './Img/funcionarios.png'


export function Funcionario() {
  return (
    <div className="body">
      <img src={funcionarios} />
    </div>
  );
}
