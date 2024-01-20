import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './cadastro.css';

const Signup = () =>{
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmpassword, setConfirmPassword] = useState('');


  const handleSignup = () =>{
    if (password != confirmpassword){
      console.error('As senhas não são iguais.');
      return;
    }
  }
  axios.post('http://localhost:5173/register/client', { name, email, password })
        .then(response => {
          // envio do cadastro pro servidor
          console.log('Cadastro bem-sucedido:', response.data);
        })
        .catch(error => {
          // pegar o erro 
          console.error('Erro no cadastro:', error);
        });
      };

function Cadastro() {
  const navigate = useNavigate();
    const handleNavigateLogin = () => {
    navigate("/");
  }

  return (
    <body>
      <section className="engloba-login">
        <div className="restaurante-login">
          <h1 id="nome-restaurante">Restaurante XXX</h1>
          <h2 id="subtitulo-restaurante">Subtítulo aqui</h2>
        </div>
        <div className="login">
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
            <label htmlFor="senha-nova" className="label">Confirmação de senha: </label>
            <input type="password" id="senha-nova" name="senha" placeholder="Digite sua senha novamente" />
          </div>
        </div>
        <button className="cadastrar" onClick={handleNavigateLogin}>CONCLUIR</button> {/*navegacao para login ok*/}
      </section>
    </body>
  );
}

export default Cadastro;