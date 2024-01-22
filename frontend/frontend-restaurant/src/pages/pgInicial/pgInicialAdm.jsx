import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pgInicial.css';
import { useParams } from "react-router-dom";
import SearchBar from '../../components/searchBar/SearchBar';
import axios from 'axios';

function pgInicialAdm() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [isEditConfirmationOpen, setIsEditConfirmationOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [imagem, setImagem] = useState("");

  const handleCadastroPrato = async () => {
    try {
      const response = await axios.post('http://localhost:8080/food', {
        name: nome,
        description: "Muito bom",
        price: preco,
        nationality: nacionalidade,
        image_url: imagem,
      });


      console.log('Resposta do backend:', response.data);

      // cadastro com sucesso, campos serão reiniciados
      setNome("");
      setDescricao("");
      setPreco("");
      setNacionalidade("");
      setImagem("");

    } catch (error) {
      console.error('Erro ao cadastrar prato:', error);
      // erro
    }
  };

  const handleNavigateLogin = () => {
    navigate("/");
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleOpenDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(true);
  }

  const handleCloseDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
  }

  const handleOpenEditConfirmation = () => {
    setIsEditConfirmationOpen(true);
  }

  const handleCloseEditConfirmation = () => {
    setIsEditConfirmationOpen(false);
  }

  const handleEditItem = () => {
    // Lógica de edição do item

    alert("Item editado com sucesso!");
    handleCloseEditConfirmation();
  }

  const handleDeleteItem = () => {
    // Lógica de exclusão do item 

    alert("Item excluído com sucesso!");
    handleCloseDeleteConfirmation();
  }

  const[pratos, setPratos] = useState([]);

  const getPratos = async() => {
      try{
          const response = await axios.get("http://localhost:8080/food");

          //recebe a lista com todos pratos
          const data = response.data;

          console.log(data);

          setPratos(data);
      }
      catch(err){
          console.log(err);
      }

  }

  useEffect(() => {
      getPratos();
  }, []);

  
  
  const handleDeletarPrato = async () => {
    // const { pratoId } = useParams();
    try {
      await axios.delete(`https://localhost:8080/food/${pratoId}`);
      setIdDeletar(pratoId);
      console.log('Prato excluído com sucesso!');
     
    } catch (error) {
      console.error('Erro ao excluir prato:', error);
    }
  };

  return (
    <body>
      <header id="cabecalho">
        <div>
          <h1 id="titulo-principal">Orc'staurante</h1>
        </div>
        <nav className="nav-bar">
          <SearchBar />
          <div className="links" onClick={handleOpenModal}>Adicionar itens</div>
          <div className="links" onClick={handleNavigateLogin}>Deslogar</div>
        </nav>
      </header>

      <div className="engloba-pg">
        <div className="cabecalho">
          <h1 className="texto-cadapio">Todas as comidas:</h1>
          <div className="cardapio">
            <div className="refeicao">
              {pratos.length === 0 ? (<p>Carregando os nossos deliciosos pratos...</p>) :
              pratos.map(prato => (
              <>
                <div className="refeicao" key={prato.id}>
                  <img src={prato.image_url} className="imagem-refeicao"/>{/*estilizar depois ou atribuir o nome das classes que foram feitas antes*/}
                  <h2 className="nome-refeicao">{prato.name}</h2>
                  <p>{prato.description}</p>
                  <p className="preco-refeicao">{prato.price}</p>
                </div>
                <div className="botoes">
                  <button className="botao-infos" onClick={handleOpenEditConfirmation}>Editar infos</button>
                  <button className="botao-infos" onClick={handleDeletarPrato}>Excluir</button>
                </div>
              </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-add">
            <h1 className="titulo-modal">Adicionar um item</h1>
            <div className="add-item">
              <div className="engloba-add">
                <div className="titulo-alteracao">Imagem do produto:</div>
                <input type="texto-alteracao" placeholder="Digite a URL da imagem" value={imagem} onChange={(e) => setImagem(e.target.value)} />
              </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Tipo de comida:</div>
                  <select onChange={(e) => setNacionalidade(e.target.value)}>
                    <option value="Brasileira">Brasileira</option>
                    <option value="Arabe">Arabe</option>
                    <option value="Francesa">Francesa</option>
                    <option value="Italiana">Italiana</option>
                    <option value="Tailandesa">Tailandesa</option>
                  </select>
                </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Nome da refeição:</div>
                <input type="texto-alteracao" placeholder="Digite o nome do prato" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Preço:</div>
                <input type="number" min="0" placeholder="Digite o preço" value={preco} onChange={(e) => setPreco(e.target.value)} />
              </div>
            </div>
            <div className="engloba-botoes">
              <button className="botao-salvar" onClick={handleCadastroPrato}>Adicionar</button>
              <button className="fechar-modal" onClick={handleCloseModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {isEditConfirmationOpen && (
        <div className="modal-overlay">
          <div className="modal-add">
            <h1 className="titulo-modal">Editar um item</h1>
            <div className="add-item">
              <div className="engloba-add">
                <div className="titulo-alteracao">Imagem do produto:</div>
                <input type="texto-alteracao" placeholder="Digite a nova URL da imagem" />
              </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Tipo de comida:</div>
                <select>
                  <option value="opcao1">Brasileira</option>
                  <option value="opcao2">Árabe</option>
                  <option value="opcao3">Francesa</option>
                  <option value="opcao3">Italiana</option>
                  <option value="opcao3">Tailandesa</option>
                </select>
              </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Nome da refeição:</div>
                <input type="texto-alteracao" placeholder="Digite o novo nome do prato" />
              </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Preço:</div>
                <input type="number" min="0" placeholder="Digite o novo preço" />
              </div>
            </div>
            <div className="engloba-botoes">
              <button className="botao-salvar" onClick={handleEditItem}>Editar</button>
              <button className="fechar-modal" onClick={handleCloseEditConfirmation}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {isDeleteConfirmationOpen && (
        <div className="modal-excluir">
          <div className="add-item">
            <div className="titulo-modal">Deseja realmente excluir esse item?</div>
            <div className="engloba-botoes">
              <button className="botao-salvar" onClick={handleDeleteItem}>Sim</button>
              <button className="fechar-modal" onClick={handleCloseDeleteConfirmation}>Não</button>
            </div>
          </div>
        </div>
      )}
    </body>
  );
}

export default pgInicialAdm;