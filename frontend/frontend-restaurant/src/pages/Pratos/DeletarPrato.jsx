import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeletarPrato = () => {
    const { pratoId } = useParams();
  
    const handleDeletarPrato = async () => {
      try {
        await axios.delete(`https://localhost:8080/food/${pratoId}`);
        console.log('Prato excluído com sucesso!');
       
      } catch (error) {
        console.error('Erro ao excluir prato:', error);
      }
    };
  
    return (
      <div>
        <button onClick={handleDeletarPrato}>Deletar Prato</button>
      </div>
    );
  };
  
  export default DeletarPrato;

