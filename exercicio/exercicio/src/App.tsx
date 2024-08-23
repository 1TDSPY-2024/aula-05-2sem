import Cabecalho from "./Components/Cabecalho/Cabecalho";

function App(){
  const tituloH1:string = "Olá, mundo!";
  const img: HTMLImageElement = new Image();
  img.src = "./../public/img/github.png";

  return(
    <div>
      <Cabecalho tituloProps={tituloH1} imgProps={img}/>
    </div>
  );
}

export default App;