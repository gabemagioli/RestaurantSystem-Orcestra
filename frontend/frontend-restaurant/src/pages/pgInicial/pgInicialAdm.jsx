import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pgInicial.css';

function pgInicialAdm() {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate("/");
      }

  return (
    <body> 
        <header id="cabecalho">
        <div>
            <h1 id="titulo-principal">Restaurante XXX</h1>
        </div>

        <nav class="nav-bar">
            <div className="links">Adicionar itens</div> {/*NAVEGAÇÃO FALTANDO*/}
            <div className="links" onClick={handleNavigateLogin}>Deslogar</div> {/*navegacao para login ok*/}
        </nav>
        </header>

        <div className="engolba-pg">
            <div className="cabecalho">
                {/*ADICIONAR BARRA DE PESQUISA*/}
            </div>
            <h1 class="texto-cadapio">Todas as comidas:</h1>
            <div className="cardapio">
                <div className="refeicao">
                    <img src="https://i.panelinha.com.br/i1/228-q-1438-feijoada-na-pressao.webp" alt="Imagem da Refeição" className="imagem-refeicao" />
                    <div className="detalhes-refeicao">
                        <span className="tipo-comida">Tipo de Comida</span>
                        <h3 className="nome-refeicao">Nome da Refeição</h3>
                        <span className="preco-refeicao">R$ 10,00</span>
                    </div>
                    <div className="botoes">
                        <button className="botao-infos">Editar infos</button> {/*NAVEGAÇÃO FALTANDO*/}
                        <button className="botao-infos">Excluir</button> {/*NAVEGAÇÃO FALTANDO*/}
                    </div>
                </div>
            </div>
        </div>
    </body>
  );
}

export default pgInicialAdm;