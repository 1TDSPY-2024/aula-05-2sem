export default function Cabecalho(props:{tituloProps: string,avisoProps:Function}){

    document.title = props.tituloProps;
    addEventListener("click",()=>{

    });

    return( 
        <header>
            <h1>Cabeçalho</h1>
            <button onClick={()=>{props.avisoProps()}}>Aviso</button>
        </header>
    );
}