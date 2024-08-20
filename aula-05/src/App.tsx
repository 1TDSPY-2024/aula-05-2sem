import Cabecalho from "./components/Cabecalho/Cabecalho";



export default function App() {
 
  const titulo:string = "Minha Pagina";
  const lista:string[] = ["o","a","v"];
  const aluno:{nome:string,idade:number,altura:number} = {
    nome: "JOAO",
    idade: 20,
    altura: 1.92
  }
  return (
    <>
      <h1>teste</h1>
      <Cabecalho tituloProps={titulo}/>
    </>
  )
}


