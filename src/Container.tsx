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

import { useState } from 'react';
interface ProdutosState {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}


function Container(){ 
  const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [categoria, setGategoria] = useState("")

  const [produtos, setProdutos] = useState<ProdutosState[]>([
    { id:1, nome:"Computador", 
      preco: 3500, 
      categoria: "Informática" }
  ])
  function trataForm(event: React.FormEvent<HTMLInputElement>){
    event.preventDefault();
    // Pegar os dados que a pessoa está cadastrando no formulario e inserir no array de produtos.
    const produtoNovo: ProdutosState = {
      id: parseInt(id), // Gerar um novo ID baseado no tamanho do array
      nome: nome,
      preco: parseFloat(preco), // Converter o preço para número
      categoria: categoria
    }
    setProdutos([...produtos, produtoNovo])
  }
  function trataId(event: React.ChangeEvent<HTMLInputElement>){
    // Pegar o valor do input de id e atualizar o estado id
    setId(event.target.value);
  }
  function trataNome(event: React.ChangeEvent<HTMLInputElement>){
    // Pegar o valor do input de nome e atualizar o estado nome
    setNome(event.target.value);
  }
  function trataPreco(event: React.ChangeEvent<HTMLInputElement>){
    // Pegar o valor do input de preco e atualizar o estado preco
    setPreco(event.target.value);
  }
  function trataCategoria(event: React.ChangeEvent<HTMLInputElement>){
    // Pegar o valor do input de categoria e atualizar o estado categoria
    setGategoria(event.target.value);
  }

  return(
    <>
    <div className="container">
      {produtos[0].nome}
        <div className="container-cadastro">
            <form onSubmit={trataForm}>
                <input type="text" name="id" id="id" onChange={trataId}/>
                <input type="text" name="nome" id="nome" onChange={trataNome}/>
                <input type="text" name="preco" id="preco" onChange={trataPreco}/>
                <input type="text" name="categoria" id="categoria" onChange={trataCategoria}/>
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