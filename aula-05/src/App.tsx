import Cabecalho from "./components/Cabecalho/Cabecalho";



export default function App() {
 
  const pagina:string = "Pagina Principal";
  const nrPagina:number = 2;
  const status = "loading";
  const aviso = ()=> alert(pagina);
  
  return (
    <>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
    </>
  )
}


