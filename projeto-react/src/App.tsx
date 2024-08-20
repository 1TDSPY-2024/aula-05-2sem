import Cabecalho from "./components/Cabecalho/Cabecalho";

function App(){
  const titulo:string = "Minha Página";
  // const numero:number = 0;
  // const listaDeNomes:string[] = ["João", "Maria", "Pedro"];
  // const aluno:{nome:string, idade:number, altura:number} = {
  //   nome: "João",
  //   idade: 20,
  //   altura: 1.80
  // }

  const aviso = ()=> alert(titulo);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </div>
  );
}

export default App;