
// Criar o controle das props que estamos recebendo
type CabecalhoProps = {
    tituloProps: String;
    avisoProps: Function;
}

function Cabecalho({tituloProps, avisoProps}:CabecalhoProps){

    document.title = tituloProps;
    

    return(
        <header className="cabecalho">
            <h1>{tituloProps}</h1>
            <button onclick={()=> avisoProps()}></button>
        </header>
    );
}

export default Cabecalho;