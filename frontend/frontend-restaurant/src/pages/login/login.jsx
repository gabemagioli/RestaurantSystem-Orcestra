import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const handleNavigateCadastro = () => {
    navigate("/cadastro");
  }

  const handleNavigatePgInicial = () => {
    navigate("/pgInicial");
  }

  const handleNavigateLoginAdm = () => {
    navigate("/loginAdm");
  }

  return (
    <body>
      <section className="engloba-login">
        <div className="restaurante-login">
          <h1 id="nome-restaurante">Orculinarium</h1>
          <h2 id="subtitulo-restaurante">Sabores do mundo!</h2>
        </div>
        <div className="login">
          <div className="campo">
            <label htmlFor="email" className="label">Email: </label>
            <input type="text" id="email" name="email" placeholder="Digite seu email" />
          </div>
          <div className="campo">
            <label htmlFor="senha" className="label">Senha: </label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
          </div>
        </div>
        <button className="cadastro" onClick={handleNavigateCadastro}>Cadastre-se!</button>{/*navegacao para cadastro ok*/}
        <button className="entrar" onClick={handleNavigatePgInicial}>ENTRAR</button> {/*NAO FUNCIONA*/}
        <button className="entrar-adm" onClick={handleNavigateLoginAdm}>sou administrador</button> {/*NAO FUNCIONA*/}
      </section>
    </body>
  );
}

export default Login;