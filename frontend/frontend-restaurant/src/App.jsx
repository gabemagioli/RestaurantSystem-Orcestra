import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login/Login.jsx';
import LoginAdm from './pages/loginAdm/loginAdm.jsx';
import Cadastro from './pages/cadastro/cadastro.jsx';
import PgInicial from './pages/pgInicial/pgInicial.jsx';
import Perfil from './pages/perfil/perfil.jsx';
import Carrinho from './pages/carrinho/carrinho.jsx';
import PgInicialAdm from './pages/pgInicial/pgInicialAdm.jsx';
//as paginas abaixo sao referentes aos paises na qual o restaurante trabalha com a culinaria:
import PgBrasil from './pages/pgs/pgBrasil.jsx';
import PgArabia from './pages/pgs/pgArabia.jsx';
import PgFranca from './pages/pgs/pgFranca.jsx';
import PgItalia from './pages/pgs/pgItalia.jsx';
import PgTailandia from './pages/pgs/pgTailandia.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/loginAdm" element={<LoginAdm/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/pgInicial" element={<PgInicial/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/pgInicialAdm" element={<PgInicialAdm/>}/>
          <Route path="/pgBrasil" element={<PgBrasil/>}/>
          <Route path="/pgArabia" element={<PgArabia/>}/>
          <Route path="/pgFranca" element={<PgFranca/>}/>
          <Route path="/pgItalia" element={<PgItalia/>}/>
          <Route path="/pgTailandia" element={<PgTailandia/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
