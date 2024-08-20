function Cabecalho(props: {tituloProps:string}, avisoProps:Function){

    document.title = props.tituloProps;

    return(
        <header>
            <h1>{props.tituloProps}</h1>
            <button onClick = {()=> props.avisoProps()}>Aviso</button>
        </header>
    );
}

export default Cabecalho;