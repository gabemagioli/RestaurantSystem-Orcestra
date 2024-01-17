import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pg.css';

function pgIt() {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
    navigate("/");
}
    const handleNavigatePerfil = () => {
    navigate("/perfil");
  }

  const handleNavigateCarrinho = () => {
    navigate("/carrinho");
  }

  const handleNavigatePgInicial = () => {
    navigate("/pgInicial");
  }

  const handleNavigatePgBrasil = () => {
    navigate("/pgBrasil");
  }

  const handleNavigatePgArabia = () => {
    navigate("/pgArabia");
  }

  const handleNavigatePgFranca = () => {
    navigate("/pgFranca");
  }

  const handleNavigatePgTailandia = () => {
    navigate("/pgTailandia");
  }

  return (
    <body> 
        <header id="cabecalho">
        <div>
            <h1 id="titulo-principal">Restaurante XXX</h1>
        </div>

        <nav class="nav-bar">
            <div className="links" onClick={handleNavigatePerfil}>Perfil</div> {/*navegacao para perfik ok*/}
            <div className="links" onClick={handleNavigateCarrinho}>Carrinho</div> {/*navegacao para carrinho ok*/}
            <div className="links" onClick={handleNavigateLogin}>Deslogar</div> {/*navegacao para login ok*/}
        </nav>
        </header>

        <div className="engolba-pg">
            <div className="cabecalho">
            <div className="comida" onClick={handleNavigatePgInicial}>Todas</div> {/*navegacao para todas ok*/}
            <div className="comida" onClick={handleNavigatePgBrasil}>Brasileiras</div> {/*navegacao para brasil ok*/}
            <div className="comida" onClick={handleNavigatePgArabia}>Árabes</div>  {/*navegacao para arabia ok*/}
            <div className="comida" onClick={handleNavigatePgFranca}>Francesas</div> {/*navegacao para frança ok*/}
            <div className="comida-destaque">Italianas</div>
            <div className="comida" onClick={handleNavigatePgTailandia}>Tailandesas</div> {/*navegacao para tailandia ok*/}
            </div>
            <h1 class="texto-cadapio">Da Vinci aprova!</h1>
            <div className="cardapio">
                <div className="refeicao">
                    <img src="https://i.panelinha.com.br/i1/228-q-1438-feijoada-na-pressao.webp" alt="Imagem da Refeição" className="imagem-refeicao" />
                    <div className="detalhes-refeicao">
                        <span className="tipo-comida">Tipo de Comida</span>
                        <h3 className="nome-refeicao">Nome da Refeição</h3>
                        <span className="preco-refeicao">R$ 10,00</span>
                    </div>
                    <button className="botao-adicionar">Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    </body>
  );
}

export default pgIt;