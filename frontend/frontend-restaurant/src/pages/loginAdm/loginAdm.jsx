import React from 'react';
import { useNavigate } from 'react-router-dom';
import './loginAdm.css';

function LoginAdm() {
  const navigate = useNavigate();
  const handleNavigatePgInicialAdm = () => {
    navigate("/pgInicialAdm");
  }

  return (
    <body>
      <section className="engloba-login">
        <div className="restaurante-login">
          <h1 id="nome-restaurante">Orc'ulinarium</h1>
          <h2 id="subtitulo-restaurante">Preencha os dados abaixo</h2>
        </div>
        <div className="login">
          <div className="campo">
            <label htmlFor="email" className="label">Email: </label>
            <input type="text" id="email" name="email" placeholder="Digite seu email da empresa" />
          </div>
          <div className="campo">
            <label htmlFor="codigo" className="label">Código: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite seu código" />
          </div>
        </div>

        <button className="entrar" onClick={handleNavigatePgInicialAdm}>ENTRAR</button> {/*navegacao para pgInicialAdm ok*/}
      </section>
    </body>
  );
}

export default LoginAdm;
