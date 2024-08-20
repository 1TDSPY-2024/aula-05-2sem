function Cabecalho(props:{tituloProps: string, avisoProps:void}){

    document.title = props.tituloProps;


    return(
        <header className="cabecalho">
            <h1>{props.tituloProps}</h1>
            <button onclick={()=> props.avisoProps()}></button>
        </header>
    );
}

export default Cabecalho;