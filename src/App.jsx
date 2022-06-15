import React from "react";
import "./App.css";
import { RegisterPage } from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Login/Login";
import { FuncionarioPage } from "./pages/Funcionario";
import { Layout } from "./pages/layout";
import { FornecedorPage } from "./pages/Fornecedor";
import { RelatorioPage } from "./pages/Relatorio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<FuncionarioPage />} />
          <Route path="/Relatorio" element={<RelatorioPage />} />
          <Route path="/fornecedor" element={<FornecedorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}