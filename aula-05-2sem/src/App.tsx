import Cabecalho from "./components/Cabecalho/Cabecalho"

function App() {

  const titulo: string = "Minha página"

  return (
    <>
      <Cabecalho titulo={titulo}/>
      <h1>Componente App</h1>
    </>
  )
}

export default App
