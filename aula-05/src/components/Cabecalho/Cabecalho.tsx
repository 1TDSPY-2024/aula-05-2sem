
type CabecalhoProps = {
    tituloProps: string,
    avisoProps:Function
}


export default function Cabecalho({tituloProps,avisoProps}:CabecalhoProps){
   const aluno = {
    nome:"bla",
    idade:18
   }
  

    document.title = tituloProps;
    addEventListener("click",()=>{

    });

    return( 
        <header>
            <h1>Cabeçalho</h1>
            <button onClick={()=>{avisoProps()}}>Aviso</button>

        </header>
    );
}