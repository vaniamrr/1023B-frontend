// //Props -> é utilizado para passar um valor diferente para cada componente em sua criação 

// //States ->  Estados, salvam estados de variáveis do react e quando esses estados mudam 
// // automaticamente o React entende que ele precisa atualizar a pagina para mostrar 
// // os novos valores do componente

// //Class

// import React from 'react'
// interface ContainerProps {
//   nome:string
// }
// interface ContainerInfoState {
//   nome:string  
// }


// //Container é filha de React.Component
// // e por isso pode utilizar os métodos de React.Component
// class Container extends React.Component<ContainerProps,ContainerInfoState> {
//   constructor(props: ContainerProps) {
//     super(props)
//     this.state = {
//       nome: "Nome antes de Mudar"
//     }
//   }
//   mudar = () => {
//     this.setState ({nome: "Nome depois de Mudar"}) }

//   render(): React.ReactNode {
//     return (
//     <>
//     <h1>{this.props.nome}</h1>
//     <p>{this.state.nome}</p>
//     <button onClick={this.mudar}>Mudar Estado</button>
//     </>
    
//   )
//   }
// }
// export default Container;

import { useEffect, useState } from "react";
import './Container.css';

interface ProdutosState {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

function Container(){
  const [id,setId] = useState("");
  const [nome,setNome] = useState("");
  const [preco,setPreco] = useState("");
  const [erroMensagem,setErroMensagem] = useState("");
  const [categoria,setCategoria] = useState("");
  const [produtos,setProdutos] = useState<ProdutosState[]>([]);
  useEffect(()=>{
    const fetchData = async () => {
      try{
    const resposta = await fetch("https://localhost:8000/produtos")
    const result = await resposta.json();
    setProdutos(result);
    }catch(erro:any){
      setErroMensagem("Erro ao realizar o fetch no bakend");
    }
  }
    fetchData();
  },[]); //[] lista de dependências, quando ela muda o useEffect é executado novamente
  // useEffect é um hook que permite executar código quando o componente é montado, atualizado ou desmontado
  function trataForm(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const produtoNovo: ProdutosState = {
      id: parseInt(id),
      nome,
      preco: parseFloat(preco),
      categoria
    };
    setProdutos([...produtos, produtoNovo]);
  }
    
  // Pegar os dados que a pessoa digitou no formulário
    // e inserir isso no array de produtos 
  function trataId(event: React.ChangeEvent<HTMLInputElement>){
    setId(event.target.value);
  }
  function trataNome(event: React.ChangeEvent<HTMLInputElement>){
    setNome(event.target.value);
  }
  function trataPreco(event: React.ChangeEvent<HTMLInputElement>){
    setPreco(event.target.value);
  }
  function trataCategoria(event: React.ChangeEvent<HTMLInputElement>){
    setCategoria(event.target.value);
  }
  return(
    <>
    {erroMensagem &&
    <div className="mensagem-erro">
      <p>{erroMensagem}</p>
    </div>
    }

      <div className="container">
        <div className="mensagem-erro">
          <p>{erroMensagem}</p>
        </div>
        <div className="container-cadastro">
            <form onSubmit={trataForm}>
                <input type="text" name="id" id="id" onChange={trataId} />
                <input type="text" name="nome" id="nome" onChange={trataNome} />
                <input type="text" name="preco" id="preco" onChange={trataPreco} />
                <input type="text" name="categoria" id="categoria" onChange={trataCategoria} />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
        <div className="container-listagem">
            {produtos.map(produto=>{
                return(
                    <div className="container-produto">
                        <div className="produto-nome">
                            {produto.nome}
                        </div>
                        <div className="produto-preco">
                            {produto.preco}
                        </div>
                        <div className="produto-categoria">
                            {produto.categoria}
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  )
}
export default Container;