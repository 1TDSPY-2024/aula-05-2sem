import Cabecalho from "./Cabecalho/Cabecalho";

function App(){
  
  //tipagem de tipos primitivos e de tipos de referências
  const pagina:string = "Página principal";
  const nrPagina:number = 2;
  const status = "loading";
  const aviso = () => alert(pagina);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
    </div>
  );
}

export default App;