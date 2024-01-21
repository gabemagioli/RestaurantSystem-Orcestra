import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNavigateCadastro = () => {
    navigate("/cadastro");
  }

  const handleNavigatePgInicial = async () => {
    try {

      const response = await axios.post('http://localhost:8080/login/client', {
        email,
        password: senha,
      });

      const token = response.data.token;
      console.log('Token recebido:', token);

      // vai para a página inicial após o login
      navigate("/pgInicial");

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // exibe msg ao erro
    }
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
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="senha" className="label">Senha: </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>
        <button className="cadastro" onClick={handleNavigateCadastro}>
          Cadastre-se!
        </button>
        <button className="entrar" onClick={handleNavigatePgInicial}>
          ENTRAR
        </button>
        <button className="entrar-adm" onClick={handleNavigateLoginAdm}>
          sou administrador
        </button>
      </section>
    </body>
  );
}

export default Login;
