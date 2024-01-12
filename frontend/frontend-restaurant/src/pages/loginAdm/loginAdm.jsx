import React from 'react';
import './loginAdm.css';

function LoginAdm() {
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
            <input type="text" id="email" name="email" placeholder="Digite seu email da empresa" />
          </div>
          <div className="campo">
            <label htmlFor="codigo" className="label">Código: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite seu código" />
          </div>
        </div>

        <button className="entrar">ENTRAR</button>
      </section>
    </body>
  );
}

export default LoginAdm;
