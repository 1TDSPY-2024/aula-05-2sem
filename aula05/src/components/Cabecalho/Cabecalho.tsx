function Cabecalho({tituloProps,avisoProps}:{tituloProps: string,avisoProps:Function}){

    document.title = tituloProps;

    return(
        <header>
            <h1>{ tituloProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
        </header>
    );
}
export default Cabecalho;