import React from 'react';
import './login.css';

function Login() {
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
            <label htmlFor="email" className="label">Email: </label>
            <input type="text" id="email" name="email" placeholder="Digite seu email" />
          </div>
          <div className="campo">
            <label htmlFor="senha" className="label">Senha: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
          </div>
        </div>
        <button className="cadastro">Cadastre-se!</button>
        <button className="entrar">ENTRAR</button>
      </section>
    </body>
  );
}

export default Login;
