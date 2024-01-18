import React from 'react';
import './pg.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function pgBr() {//pratos brasil

    const[pratos, setPratos] = useState([]);

    const getPratosBrasileiros = async() => {
        try{
            const response = await axios.get("http://localhost:8080/food");

            //recebe a lista com todos pratos
            const data = response.data;
            //filtra os pratos que possuem nacionalidade brasileira e adiciona na lista
            const pratosBrasileiros = data.filter(prato => prato.nationality === "Brasil");

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
                <div><a href="#link-perfil" class="anchor-navbar">Perfil</a></div>
                <div><a href="#link-carrinho" class="anchor-navbar">Carrinho</a></div>
            </nav>
        </div>

        <div className="engolba-pg">
            <div className="cabecalho-comidas">
            <div id="comida"> Brasileiras </div>
            <div><a href="#link-arabia" class="anchor-comida">Árabes</a></div>
            <div><a href="#link-franca" class="anchor-comida">Francesas</a></div>
            <div><a href="#link-italia" class="anchor-comida">Italianas</a></div>
            <div><a href="#link-tailandia" class="anchor-comida">Tailandesas</a></div>
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