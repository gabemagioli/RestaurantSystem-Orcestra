import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import LoginAdm from './pages/loginAdm/loginAdm.jsx';
import Cadastro from './pages/cadastro/cadastro.jsx';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<LoginAdm/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
