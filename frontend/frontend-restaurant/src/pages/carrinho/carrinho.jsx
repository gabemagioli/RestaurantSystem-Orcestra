import React, { useState } from 'react';
import './carrinho.css';

function Carrinho() {
  const [itens, setItens] = useState([
    { nome: 'Refeição 1', preco: 10.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
    { nome: 'Refeição 2', preco: 15.0 },
  ]);

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleExcluirItem = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    setItens(novosItens);
  };

  const calcularTotalItens = () => {
    return itens.length;
  };

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  return (
    <div className="engloba-carrinho">
      <h2 id="titulo-carrinho">Carrinho de Compras</h2>
      <div className="carrinho-scroll">
        {itens.map((item, index) => (
          <div key={index} className="item-carrinho">
            <span className="nome-item">{item.nome}</span>
            <span className="preco-item">R$ {item.preco.toFixed(2)}</span>
            <button
              className="botao-excluir"
              onClick={() => handleExcluirItem(index)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
      <div className="total-carrinho">
        <strong>Total de itens:</strong> {calcularTotalItens()}
        <br />
        <strong>Total:</strong> R$ {calcularTotal()}
      </div>
      <div className="dados-pagamento">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="endereco">Endereço:</label>
        <input
          type="text"
          id="endereco"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </div>
      <button className="botao-pagar">Pagar</button>
    </div>
  );
}

export default Carrinho;

