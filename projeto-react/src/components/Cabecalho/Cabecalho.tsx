function Cabecalho(props:{tituloProps: string}){

    document.title = props.tituloProps;
    return(
        <header className="cabecalho">
            <h1>{props.tituloProps}</h1>
        </header>
    );
}

export default Cabecalho;