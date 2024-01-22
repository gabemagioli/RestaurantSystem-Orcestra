import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginAdm.css';

function LoginAdm() {
  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  const handleAdmLogin = async () => {
    try {

      const response = await axios.post('http://localhost:8080/login/admin', {
        email:email,
        password: senha,
      });

      const token = response.data.token;
      console.log('Token recebido:', token);

      // vai para a página inicial após o login
      navigate("/pgInicialAdm");

    } catch (error) {
      alert("Credencial invalida, confirme se sua senha ou email estao corretos!")
      console.error('Erro ao fazer login:', error);
      // exibe msg ao erro
    }
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
            <input type="text" id="email" name="email" placeholder="Digite seu email da empresa" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="campo">
            <label htmlFor="codigo" className="label">Código: </label>
            <input 
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite seu código"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} />
          </div>
        </div>

        <button className="entrar" onClick={handleAdmLogin}>ENTRAR</button> {/*navegacao para pgInicialAdm ok*/}
      </section>
    </body>
  );
}

export default LoginAdm;
