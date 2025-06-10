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
interface ContainerProps {
  nome: string;
}
function Container(props:ContainerProps){ 
  const [texto, setTexto] = useState("Texto antes de Mudar")
  function mudar() {
    setTexto("Texto depois de Mudar")
  }
  return(
    <>
      <h1>{props.nome}</h1>
      <p>{texto}</p>
      <button onClick={mudar}>Mudar Estado</button>
    </>
  )
}
export default Container;