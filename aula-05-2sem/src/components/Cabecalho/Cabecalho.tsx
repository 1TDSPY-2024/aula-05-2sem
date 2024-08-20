type CabecalhoType = {
  pagina: string,
  nrPagina : number | string,
  status: "loading" | "deployed",
  aviso: Function;
}

export default function Cabecalho({pagina, nrPagina, status, aviso}:CabecalhoType) {
  
  document.title = status + " - " + nrPagina
  
  return (
    <header>
      <h1>{pagina + "\n" + nrPagina}</h1>
      <button onClick={() => aviso()}>aviso</button>
    </header>
  )
} 