import "./index.css";
import { useNavigate } from "react-router-dom";

export function Fornecedor() {
  const navigate = useNavigate();
  const mapspage = (e) => {
    navigate("/");
  };
  return (
    <div className="bobycenter">
    <div className="container">
      <div className="tools">
        <h1>Cadastrar novo fornecedor</h1>
        <div className="count1">
        <div className="name-fornecedor">
          <input placeholder="Nome do fornecedor" type="text" />
        </div>
        <div className="city">
          <input placeholder="Cidade" type="text" />
        </div>
        </div>
        <div className="count2">
        <div className="cpf">
          <input placeholder="CPF" type="text" />
        </div>
        <div className="telefone">
          <input placeholder="Telefone" type="text" />
        </div>
        </div>
        <div className="tipoProduto">
          <input placeholder="Tipo do produto fornecido" type="text" />
        </div>
        <button onClick={mapspage}>Cadastrar</button>
      </div>
    </div>
    </div>
  );
}
