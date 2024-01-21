import React from 'react';
import './perfil.css';

function Perfil() {
  return (
    <div>
      <header>
        <div className="engloba-perfil">
          <h1 id="nome-restaurante">Orc'staurante</h1>
            <div className="sobre-cliente">
              <img src="https://cdn-icons-png.flaticon.com/512/1615/1615645.png" id="img-cliente" alt="Imagem do cliente" />
              <h2 id="nome-cliente">Nome do cliente</h2>
            </div>
            <div className="medalhas">
              <div className="engloba-medalha">
                <h3 className="pais-medalha">Brasil</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/179/179250.png" className="img-medalha" alt="Imagem do cliente" />
                <h4 className="desc-medalha">Bronze</h4>
              </div>
              <div className="engloba-medalha">
                <h3 className="pais-medalha">Árabe</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/179/179251.png" className="img-medalha" alt="Imagem do cliente" />
                <h4 className="desc-medalha">Prata</h4>
              </div>
              <div className="engloba-medalha">
                <h3 className="pais-medalha">França</h3>
                <img src="https://www.svgrepo.com/show/7725/gold-medal.svg" className="img-medalha" alt="Imagem do cliente" />
                <h4 className="desc-medalha">Ouro</h4>
              </div>
              <div className="engloba-medalha">
                <h3 className="pais-medalha">Itália</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/6826/6826597.png" className="img-medalha" alt="Imagem do cliente" />
                <h4 className="desc-medalha">Mestre</h4>
              </div>
              <div className="engloba-medalha">
                <h3 className="pais-medalha">Tailândia</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/6826/6826597.png" className="img-medalha" alt="Imagem do cliente" />
                <h4 className="desc-medalha">Mestre</h4>
              </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Perfil;