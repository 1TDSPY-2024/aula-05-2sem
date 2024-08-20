type CabecalhoType = {
  pagina: string,
  nrPagina : number | string,
  status: "loading" | "deployed",
  aviso: Function,
  children: React.ReactNode;
}

export default function Cabecalho({pagina, nrPagina, status, aviso, children}:CabecalhoType) {
  
  document.title = status + " - " + nrPagina
  
  return (
    <header>
      <h1>{pagina + "\n" + nrPagina}</h1>
      <button onClick={() => aviso()}>aviso</button>
      <div>
        {children}
      </div>
    </header>
  )
} 