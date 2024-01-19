import React from 'react';
import './pg.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function pgBr() {//pratos brasil
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

    const getPratosBrasileiros = async() => {
        try{
            const response = await axios.get("http://localhost:8080/food");

            //recebe a lista com todos pratos
            const data = response.data;
            //filtra os pratos que possuem nacionalidade brasileira e adiciona na lista
            const pratosBrasileiros = data.filter(prato => prato.nationality === "Brasileira");
            console.log(pratosBrasileiros);

            setPratos(pratosBrasileiros);
        }
        catch(err){
            console.log(err);
        }

    }

    useEffect(() => {
        getPratosBrasileiros();
    }, []);


  return (
    <body> 
        <div id="cabecalho">
            <div>
                <h1 id="titulo-principal">Restaurante XXX</h1>
            </div>

            <nav class="nav-bar">
              <input
                 type="text"
                 placeholder="Pesquisar nome da refeição"
                 onChange={(e) => handleSearch(e.target.value)}
              />
            <div className="links" onClick={handleNavigatePerfil}>Perfil</div> {/*navegacao para perfik ok*/}
            <div className="links" onClick={handleNavigateCarrinho}>Carrinho</div> {/*navegacao para carrinho ok*/}
            <div className="links" onClick={handleNavigateLogin}>Deslogar</div> {/*navegacao para login ok*/}
            </nav>
        </div>

        <div className="engolba-pg">
            <div className="cabecalho">
            <div className="comida" onClick={handleNavigatePgInicial}>Todas</div> {/*navegacao para todas ok*/}
            <div className="comida-destaque"> Brasileiras </div>
            <div className="comida" onClick={handleNavigatePgArabia}>Árabes</div>  {/*navegacao para arabia ok*/}
            <div className="comida" onClick={handleNavigatePgFranca}>Francesas</div> {/*navegacao para frança ok*/}
            <div className="comida" onClick={handleNavigatePgItalia}>Italianas</div> {/*navegacao para italia ok*/}
            <div className="comida" onClick={handleNavigatePgTailandia}>Tailandesas</div> {/*navegacao para tailandia ok*/}
            </div>
            <h1 class="texto-cadapio">Não fuja de suas raízes!</h1>
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

export default pgBr;