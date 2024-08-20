import Cabecalho from "./components/Cabecalho/Cabecalho";



export default function App() {
 
  const titulo:string = "Minha Pagina";
 const aviso = ()=> alert(titulo);
  return (
    <>
      <h1>teste</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </>
  )
}


