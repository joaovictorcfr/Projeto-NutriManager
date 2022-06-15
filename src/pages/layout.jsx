import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdOutlinePeopleOutline,
  MdOutlineGroupAdd,
  MdAssignment,
  MdExitToApp,
  MdDoneOutline,
} from "react-icons/md";
import "./layout.css";

export function Layout() {
  return (
    <div className="layoutPage">
      <ul className="layoutMenu">
        <h1>Nutri Manager</h1>
        <li className="icons1">
          <MdOutlinePeopleOutline />
          <Link to="/"> Funcionários </Link>
        </li>
        <li className="icons2">
          <MdOutlineGroupAdd />
          <Link to="/fornecedor"> Fornecedores </Link>
        </li>
        <li className="icons3">
          <MdAssignment />
          <Link to="/relatorio"> Relatório </Link>
        </li>
        <li className="icons4">
          <MdExitToApp />
          <Link to="/login"> Sair </Link>
        </li>
        <MdDoneOutline />
        <div className="img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1147/1147832.png"
            alt="logo"
          />
        </div>
      </ul>
      <div className="layoutContent">
        <Outlet />
      </div>
    </div>
  );
}
