
import './pgInicial.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../../components/searchBar/SearchBar';

function pgInicial() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
      setSearchTerm(value);
      // Lógica de pesquisa
    };

    const handleNavigateLogin = () => {
      navigate("/");
    }

    const handleNavigatePerfil = () => {
    navigate("/perfil");
  }

  const handleNavigateCarrinho = () => {
    navigate("/carrinho");
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

  const handleNavigatePgItalia = () => {
    navigate("/pgItalia");
  }

  const handleNavigatePgTailandia = () => {
    navigate("/pgTailandia");
  }

  const[pratos, setPratos] = useState([]);

  const getPratos = async() => {
      try{
          const response = await axios.get("http://localhost:8080/food");

          //recebe a lista com todos pratos
          const data = response.data;

          setPratos(data);
      }
      catch(err){
          console.log(err);
      }

  }

  useEffect(() => {
      getPratos();
  }, []);


  return (
    <body> 
        <header id="cabecalho">
        <div>
            <h1 id="titulo-principal">Restaurante XXX</h1>
        </div>

        <nav class="nav-bar">
            <SearchBar
                placeholder="Pesquisar nome da refeição"
                onSearch={handleSearch}
            />
            <div className="links" onClick={handleNavigatePerfil}>Perfil</div> {/*navegacao para perfik ok*/}
            <div className="links" onClick={handleNavigateCarrinho}>Carrinho</div> {/*navegacao para carrinho ok*/}
            <div className="links" onClick={handleNavigateLogin}>Deslogar</div> {/*navegacao para login ok*/}
        </nav>
        </header>

        <div className="engloba-pg">
            <div className="cabecalho">
            <div className="comida-destaque"> Todas </div>
            <div className="comida" onClick={handleNavigatePgBrasil}>Brasileiras</div> {/*navegacao para brasil ok*/}
            <div className="comida" onClick={handleNavigatePgArabia}>Árabes</div>  {/*navegacao para arabia ok*/}
            <div className="comida" onClick={handleNavigatePgFranca}>Francesas</div> {/*navegacao para frança ok*/}
            <div className="comida" onClick={handleNavigatePgItalia}>Italianas</div> {/*navegacao para italia ok*/}
            <div className="comida" onClick={handleNavigatePgTailandia}>Tailandesas</div> {/*navegacao para tailandia ok*/}
            </div>
            <h1 class="texto-cardapio">Confira as preferidas dos clientes!</h1>
            <div className="cardapio">
            {pratos.length === 0 ? (<p>Carregando os nossos deliciosos pratos...</p>) :
            pratos.map(prato => (//depois implementar uma forma de puxar apenas os pratos com nacionalidade br -> if(pratos.nacionalidade == brasil) -> retornar prato ->>> validacao a ser feita na funcao getPratosBrasileiros
              <div className="refeicao" key={prato.id}>
                <img src={prato.image_url} className="imagem-refeicao"/>{/*estilizar depois ou atribuir o nome das classes que foram feitas antes*/}
                <h2 className="nome-refeicao">{prato.name}</h2>
                <p>{prato.description}</p>
                <p className="preco-refeicao">{prato.price}</p>
              </div>
            ))}
            </div>
        </div>
    </body>
  );
}

export default pgInicial;