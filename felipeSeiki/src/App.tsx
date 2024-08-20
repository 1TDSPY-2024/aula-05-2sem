import Cabecalho from "./Cabecalho/Cabecalho";

//tipagem de tipos primitivos e de tipos de referências
const titulo:string = "Minha página";
const numero:number = 0;
const listaDeNomes:string[] = ["João","Maria","Pedro"];
const aluno:{nome:string,idade:number,altura:number}={
  nome:"João",
  idade:20,
  altura:1.80
}

function App(){
  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo}/>
    </div>
  );
}

export default App;