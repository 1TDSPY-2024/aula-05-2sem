type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:string | number;
    statusProps:"loading";
    avisoProps:()=>void; 
};

function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:CabecalhoProps){

    document.title = statusProps+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"\n - "+nrPaginaProps}</h1>
            <button onClick = {()=> avisoProps()}>Aviso</button>
        </header>
    );
}

export default Cabecalho;