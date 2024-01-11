import React from 'react';
import './styles/login.css';

function App() {
  return (
    <header>
      <div className="engloba-login">
        <div className="restaurante-login">
          <h1 id="nome-restaurante">Restaurante XXX</h1>
          <h2 id="subtitulo-restaurante">Subtítulo aqui</h2>
        </div>
        <div className="login">
          <div className="titulo">Login</div>
          <div className="campo">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Digite seu email" />
          </div>
          <div className="campo">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
