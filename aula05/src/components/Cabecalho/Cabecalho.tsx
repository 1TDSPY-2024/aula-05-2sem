type CabecalhoProps = {
    tituloProps: string;
    avisoProps:Function;
}

function Cabecalho({tituloProps,avisoProps}:CabecalhoProps){

    document.title = tituloProps;

    return(
        <header>
            <h1>{ tituloProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
        </header>
    );
}
export default Cabecalho;