import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pgInicial.css';
import SearchBar from '../../components/searchBar/SearchBar';

function pgInicialAdm() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [isEditConfirmationOpen, setIsEditConfirmationOpen] = useState(false);

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

  return (
    <body>
      <header id="cabecalho">
        <div>
          <h1 id="titulo-principal">Restaurante XXX</h1>
        </div>
        <nav className="nav-bar">
            <SearchBar />
          <div className="links" onClick={handleOpenModal}>Adicionar itens</div>
          <div className="links" onClick={handleNavigateLogin}>Deslogar</div>
        </nav>
      </header>

      <div className="engloba-pg">
        <div className="cabecalho">
        </div>
        <h1 className="texto-cadapio">Todas as comidas:</h1>
        <div className="cardapio">
          <div className="refeicao">
            <img src="https://i.panelinha.com.br/i1/228-q-1438-feijoada-na-pressao.webp" alt="Imagem da Refeição" className="imagem-refeicao" />
            <div className="detalhes-refeicao">
              <span className="tipo-comida">Tipo de Comida</span>
              <h3 className="nome-refeicao">Nome da Refeição</h3>
              <span className="preco-refeicao">R$ 10,00</span>
            </div>
            <div className="botoes">
              <button className="botao-infos" onClick={handleOpenEditConfirmation}>Editar infos</button>
              <button className="botao-infos" onClick={handleOpenDeleteConfirmation}>Excluir</button>
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
                <input type="texto-alteracao" placeholder="Digite a URL da imagem" />
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
                <input type="texto-alteracao" placeholder="Digite o nome do prato" />
              </div>
              <div className="engloba-add">
                <div className="titulo-alteracao">Preço:</div>
                <input type="number" min="0" placeholder="Digite o preço" />
              </div>
            </div>
            <div className="engloba-botoes">
              <button className="botao-salvar" onClick={handleCloseModal}>Adicionar</button>
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