import Cabecalho from "./components/Cabecalho/Cabecalho";

function App() {

  const pagina:string = "Página Principal";
  const numPagina:number = 2;
  const status = "loading";
  const aviso = ()=> alert(pagina);

  // const listaDeNomes:string[] = ["Diego", "Vanessa", "Alan", "Melissa", "Nicolle"];

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} numPaginaProps={numPagina} statusProps={status} avisoProps={aviso}/>
    </div>
  );
}

export default App;