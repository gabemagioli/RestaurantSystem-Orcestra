import React from 'react';
import './pg.css';

function pgTl() {
  return (
    <body> 
        <header id="cabecalho">
        <div>
            <h1 id="titulo-principal">Restaurante XXX</h1>
        </div>

        <nav class="nav-bar">
            <div><a href="#link-perfil" class="anchor-navbar">Perfil</a></div>
            <div><a href="#link-carrinho" class="anchor-navbar">Carrinho</a></div>
        </nav>
        </header>

        <div className="engolba-pg">
            <div className="cabecalho-comidas">
            <div><a href="#link-brasil" class="anchor-comida">Brasileiras</a></div>
            <div><a href="#link-arabia" class="anchor-comida">Árabes</a></div>
            <div><a href="#link-franca" class="anchor-comida">Francesas</a></div>
            <div><a href="#link-italia" class="anchor-comida">Italianas</a></div>
            <div id="comida">Tailandesas</div>
            </div>
            <h1 class="texto-cadapio">O melhor do oriente!</h1>
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

export default pgTl;