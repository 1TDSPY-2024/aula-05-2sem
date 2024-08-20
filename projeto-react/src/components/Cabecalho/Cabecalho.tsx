function Cabecalho({tituloProps, avisoProps}:{tituloProps: string, avisoProps:void}){

    document.title = tituloProps;
    

    return(
        <header className="cabecalho">
            <h1>{tituloProps}</h1>
            <button onclick={()=> avisoProps()}></button>
        </header>
    );
}

export default Cabecalho;