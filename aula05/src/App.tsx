import Cabecalho from "./components/Cabecalho/Cabecalho";

function App() {

  const pagina:string = "Página Principal";
  const numPagina:number = 2;
  const status = "loading";
  const aviso = ()=> alert("Trabalhadores do mundo, uní-vos!");

  // const listaDeNomes:string[] = ["Diego", "Vanessa", "Alan", "Melissa", "Nicolle"];

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} numPaginaProps={numPagina} statusProps={status} avisoProps={aviso}>
        <ul>
          <li><a href="#">Aluno-1</a></li>
          <li><a href="#">Aluno-2</a></li>
          <li><a href="#">Aluno-3</a></li>
          <li><a href="#">Aluno-4</a></li>
          <li><a href="#">Aluno-5</a></li>
        </ul>
      </Cabecalho>
    </div>
  );
}

export default App;