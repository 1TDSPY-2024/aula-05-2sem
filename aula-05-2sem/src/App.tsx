import Cabecalho from "./components/Cabecalho/Cabecalho"

function App() {

  const pagina: string = "Página principal"
  const nrPagina: number = 2
  const status = "loading"
  const aviso = () => alert("aviso")

  return (
    <>
      <h1>Componente App</h1>
      <Cabecalho pagina={pagina} nrPagina={nrPagina} status={status} aviso={aviso}/>
    </>
  )
}

export default App
