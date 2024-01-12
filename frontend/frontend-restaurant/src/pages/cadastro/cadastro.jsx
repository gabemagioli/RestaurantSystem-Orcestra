import React from 'react';
import './cadastro.css';

function Cadastro() {
  return (
    <body>
      <section className="engloba-login">
        <div className="restaurante-login">
          <h1 id="nome-restaurante">Restaurante XXX</h1>
          <h2 id="subtitulo-restaurante">Subtítulo aqui</h2>
        </div>
        <div className="login">
          {/* <div className="titulo">Login</div> */}
          <div className="campo">
            <label htmlFor="nome" className="label">Nome: </label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />
          </div>
          <div className="campo">
            <label htmlFor="email" className="label">Email: </label>
            <input type="text" id="email" name="email" placeholder="Digite seu email" />
          </div>
          <div className="campo">
            <label htmlFor="senha" className="label">Senha: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
          </div>
          <div className="campo">
            <label htmlFor="senha" className="label">Confirmação de senha: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha novamente" />
          </div>
        </div>
        <button className="cadastrar">CONCLUIR</button>
      </section>
    </body>
  );
}

export default Cadastro;