import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import LoginAdm from './pages/loginAdm/loginAdm.jsx';
import Cadastro from './pages/cadastro/cadastro.jsx';
import PgInicial from './pages/pgInicial/pgInicial.jsx';
import Perfil from './pages/perfil/perfil.jsx';
import Carrinho from './pages/carrinho/carrinho.jsx';
import PgBr from './pages/pgs/pgBr.jsx';
import PgAr from './pages/pgs/pgAr.jsx';
import PgFr from './pages/pgs/pgFr.jsx';
import PgIt from './pages/pgs/pgIt.jsx';
import PgTl from './pages/pgs/pgTl.jsx';
import PgInicialAdm from './pages/pgInicial/pgInicialAdm.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<LoginAdm/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/pginicial" element={<PgInicial/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/pgBr" element={<PgBr/>}/>
          <Route path="/pgAr" element={<PgAr/>}/>
          <Route path="/pgFr" element={<PgFr/>}/>
          <Route path="/pgIt" element={<PgIt/>}/>
          <Route path="/pgTl" element={<PgTl/>}/>
          <Route path="/pgInicialAdm" element={<PgInicialAdm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
