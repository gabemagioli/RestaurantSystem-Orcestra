import {React, useState, useEffect} from 'react'

export const CadastrarPrato = () => {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [imagem, setImagem] = useState("");

    const handleCadastroPrato = async () => {
      try {
        const response = await axios.post('http://localhost:8080/food', {
          name: nome,
          description: descricao,
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
 

  return (
    <div>
        
    </div>
  )
}
