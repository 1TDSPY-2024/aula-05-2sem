type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:string | number;
    // onionTypes de valores: a propriedade pode receber somente "loading" ou "deployed"
    // 
    statusProps:"loading" | "deployed";
    // avisoProps:Function;
    avisoProps: ()=>void;
}

function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:CabecalhoProps){

    document.title = statusProps+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"\n - "+nrPaginaProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
        </header>
    );
}
export default Cabecalho;